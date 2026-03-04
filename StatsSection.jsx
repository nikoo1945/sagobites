import { motion } from "framer-motion";
import { Users, Package, Heart, Award, Target, TrendingDown, CheckCircle } from "lucide-react";

const stats = [
  { icon: TrendingDown, value: "19.8%", label: "Target Penurunan Stunting (SSGI 2024)" },
  { icon: Target, value: "10.39g", label: "Protein per 100g Ulat Sagu" },
  { icon: CheckCircle, value: "100%", label: "Bahan Lokal Indonesia" },
  { icon: Heart, value: "20+", label: "Cookies per 100g Bahan" },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

