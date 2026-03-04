import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Loader2, AlertCircle, Utensils } from "lucide-react";

export function NutritionSection() {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [showApiInput, setShowApiInput] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageBase64(reader.result.split(",")[1]);
        setResult(null);
        setError("");
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeNutrition = async () => {
    if (!imageBase64) {
      setError("Pilih gambar dulu!");
      return;
    }
    if (!apiKey) {
      setError("Masukkan API Key!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": window.location.origin,
        },
        body: JSON.stringify({
          model: "openai/gpt-4o",
          messages: [
            {
              role: "user",
              content: [
                { type: "text", text: "Analisis makanan ini dan perkirakan kandungan gizinya (Kalori, Protein, Karbo, Lemak, Serat). Jawab dalam format JSON: { \"kalori\": \"...\", \"protein\": \"...\", \"karbo\": \"...\", \"lemak\": \"...\", \"serat\": \"...\", \"deskripsi\": \"...\" }" },
                { type: "image_url", image_url: { url: `data:image/jpeg;base64,${imageBase64}` } }
              ]
            }
          ]
        })
      });

      const data = await res.json();
      if (data.choices && data.choices[0]) {
        const content = data.choices[0].message.content;
        try {
          const jsonMatch = content.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            setResult(JSON.parse(jsonMatch[0]));
          } else {
            throw new Error();
          }
        } catch {
          setResult({ deskripsi: content });
        }
      } else {
        throw new Error(data.error?.message || "Gagal menganalisis");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="scanner" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera size={16} />
            <span>AI Scanner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            AI Nutrition{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Scanner
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Upload foto makanan dan kami akan menganalisis kandungan nutrisinya secara instan!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-5 text-white flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Utensils size={20} />
            </div>
            <div>
              <h3 className="font-bold">AI Nutrition Scanner</h3>
              <p className="text-xs opacity-80">Deteksi gizi via foto</p>
            </div>
          </div>

          <div className="p-5 space-y-4">
            {showApiInput && (
              <div className="flex gap-2">
                <input 
                  type="password" 
                  placeholder="Masukkan API Key OpenRouter..." 
                  className="flex-1 text-sm p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 outline-none"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <button 
                  onClick={() => setShowApiInput(false)}
                  className="px-4 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition"
                >
                  Simpan
                </button>
              </div>
            )}

            <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px] bg-gray-50 cursor-pointer hover:border-blue-400 transition">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="max-h-[180px] rounded-lg object-contain" />
              ) : (
                <div className="text-center text-gray-400">
                  <Camera size={40} className="mx-auto mb-3" />
                  <p className="text-sm">Klik untuk upload gambar makanan</p>
                  <p className="text-xs mt-1">atau drag & drop</p>
                </div>
              )}
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" onChange={handleImageChange} />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            {result && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 p-5 rounded-xl space-y-3"
              >
                <h4 className="font-bold text-blue-800">📊 Hasil Analisis:</h4>
                {result.kalori ? (
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <span className="block text-gray-500 text-xs">Kalori</span> 
                      <span className="font-bold text-blue-600">{result.kalori}</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <span className="block text-gray-500 text-xs">Protein</span> 
                      <span className="font-bold text-blue-600">{result.protein}</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <span className="block text-gray-500 text-xs">Karbo</span> 
                      <span className="font-bold text-blue-600">{result.karbo}</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <span className="block text-gray-500 text-xs">Lemak</span> 
                      <span className="font-bold text-blue-600">{result.lemak}</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <span className="block text-gray-500 text-xs">Serat</span> 
                      <span className="font-bold text-blue-600">{result.serat}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{result.deskripsi}</p>
                )}
              </motion.div>
            )}

            <button 
              onClick={analyzeNutrition} 
              disabled={loading || !imageBase64}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> Menganalisis...
                </>
              ) : (
                <>
                  <Camera size={20} /> Analisis Sekarang
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

