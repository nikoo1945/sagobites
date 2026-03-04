import { motion } from "framer-motion";
import { Leaf, Brain, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Bahan Lokal Indonesia",
    description: "Dibuat dari ulat sagu (Rhynchophorus bilineatus) dan kacang koro - mudah ditemukan di Indonesia",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Brain,
    title: "Tinggi Protein (10.39g/100g)",
    description: "Ulat sagu kaya protein, asam amino, magnesium, dan zinc untuk perkembangan otak anak",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Heart,
    title: "Solusi Cegah Stunting",
    description: "Membantu pencegahan stunting sesuai program pemerintah dengan harga terjangkau",
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Shield,
    title: "Proses Pembuatan Sederhana",
    description: "Bisa dibuat di rumah dengan alat dasar - mendukung kemandirian pangan masyarakat",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

export function FeatureCards() {
  return (
    <section id="fitur" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Kenapa Pilih{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Sagobites?
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Kami menghadirkan solusi nutrisi terbaik untuk generasi masa depan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

