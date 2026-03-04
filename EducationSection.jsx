import { motion } from "framer-motion";
import { BookOpen, Video, FileText, ChevronRight, Baby, Users, AlertCircle } from "lucide-react";

const articles = [
  {
    icon: AlertCircle,
    title: "Apa itu Stunting?",
    description: "Mengenal stunting: dampak pada pertumbuhan fisik, kognitif, dan produktivitas - SSGI 2024: 19,8%",
    category: "Pendidikan",
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Baby,
    title: "1000 Hari Pertama Kehidupan",
    description: "Periode kritis tumbuh kembang anak - pencegahan stunting harus dimulai sejak hamil",
    category: "Tips",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: BookOpen,
    title: "Ulat Sagu: Superfood Lokal",
    description: "100g ulat sagu = 10.39g protein & 17.17g lemak - solusi protein murah dari Indonesia",
    category: "Artikel",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export function EducationSection() {
  return (
    <section id="tentang" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Edukasi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Kesehatan
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Pelajari lebih lanjut tentang nutrisi dan pencegahan stunting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className={`w-14 h-14 ${article.color} rounded-xl flex items-center justify-center mb-4`}>
                <article.icon className={`h-7 w-7 ${article.iconColor}`} />
              </div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                {article.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-green-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm">{article.description}</p>
              <div className="mt-4 flex items-center text-green-600 font-medium text-sm">
                <span>Baca Selengkapnya</span>
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

