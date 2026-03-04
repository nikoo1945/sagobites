import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Loader2, AlertCircle } from "lucide-react";

export function AIChatSection() {
  const [messages, setMessages] = useState([
    { role: "ai", content: "Halo! Saya Sagoo AI. Tanyakan apa saja tentang stunting atau gizi. 🍪" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiInput, setShowApiInput] = useState(true);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    if (!apiKey) {
      alert("Masukkan API Key OpenRouter terlebih dahulu.");
      return;
    }

    const newUserMessage = { role: "user", content: input };
    setMessages(prev => [...prev, newUserMessage]);
    setInput("");
    setLoading(true);
    scrollToBottom();

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": window.location.origin,
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            { role: "system", content: "Kamu adalah Sagoo, asisten AI ahli gizi dari Sagobites. Jawab dengan bahasa Indonesia yang ramah dan informatif." },
            ...messages.filter(m => m.role !== 'ai' || !m.content.startsWith('Error')).map(m => ({ role: m.role === 'ai' ? 'assistant' : 'user', content: m.content })),
            { role: "user", content: input }
          ]
        })
      });

      const data = await res.json();
      if (data.choices && data.choices[0]) {
        const aiReply = data.choices[0].message.content;
        setMessages(prev => [...prev, { role: "ai", content: aiReply }]);
      } else {
        throw new Error(data.error?.message || "Gagal mendapat respons.");
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "ai", content: `Error: ${error.message}` }]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  return (
    <section id="chat" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle size={16} />
            <span>AI Assistant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Tanya Sagoo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              AI Chat
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan tentang nutrisi, stunting, atau pola makan sehat? Tanyakan saja pada Sagoo AI!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col h-[450px]"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-5 rounded-t-3xl text-white flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <MessageCircle size={20} />
            </div>
            <div>
              <h3 className="font-bold">Sagoo AI Chat</h3>
              <p className="text-xs opacity-80">Asisten Gizi Cerdas</p>
            </div>
          </div>

          {/* API Key Input */}
          {showApiInput && (
            <div className="p-3 border-b bg-gray-50">
              <input 
                type="password" 
                placeholder="Masukkan API Key OpenRouter..." 
                className="w-full text-sm p-3 border rounded-lg focus:ring-2 focus:ring-purple-200 outline-none"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <button 
                onClick={() => setShowApiInput(false)}
                className="mt-2 text-xs text-purple-600 hover:text-purple-700"
              >
                Simpan & Lanjutkan →
              </button>
            </div>
          )}

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === "user" 
                    ? "bg-purple-500 text-white rounded-br-none" 
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t bg-gray-50 rounded-b-3xl flex gap-2">
            <input 
              className="flex-1 p-3 border rounded-xl text-sm focus:ring-2 focus:ring-purple-200 outline-none"
              placeholder="Tanya tentang gizi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button 
              onClick={sendMessage} 
              disabled={loading}
              className="p-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 disabled:opacity-50 transition"
            >
              {loading ? <Loader2 size={20} className="animate-spin"/> : <Send size={20}/>}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

