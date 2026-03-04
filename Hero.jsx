import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Zap, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Heart size={16} className="text-red-500" />
              <span>Cegah Stunting dari Sekarang</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              SAGO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                BITES
              </span>
              {" "}
              <span className="text-3xl sm:text-4xl lg:text-5xl">
                Cookies Protein Tinggi dari Ulat Sagu
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-gray-600 max-w-lg"
            >
              Inovasi cookies dari tepung ulat sagu (Rhynchophorus bilineatus) yang kaya protein. 
              Dalam 100g ulat sagu mengandung 10,39g protein dan 17,17g lemak -solusi pencegahan stunting 
              yang lezat, terjangkau, dan berbasis pangan lokal Indonesia!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-shadow"
              >
                Pesan Sekarang
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-green-500 transition-colors"
              >
                Pelajari Lebih Lanjut
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <Shield size={20} className="text-green-600" />
                <span className="text-sm">Tersertifikasi BPOM</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Zap size={20} className="text-green-600" />
                <span className="text-sm">10.39g Protein/100g</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Heart size={20} className="text-green-600" />
                <span className="text-sm">100% Bahan Lokal</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp size={20} className="text-green-600" />
                <span className="text-sm">SSGI 2024: 19.8%</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Illustration - Improved Layout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center"
          >
            {/* Main Product Card */}
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300 w-full max-w-sm">
              {/* Logo */}
              <div className="flex flex-col items-center mb-6">
                <div className="text-6xl mb-2">🍪</div>
                <h3 className="text-xl font-bold text-gray-800">SAGO BITES</h3>
                <p className="text-sm text-gray-500">Cookies Protein Tinggi</p>
              </div>
              
              {/* Nutrition Info */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl text-white text-center"
                >
                  <div className="text-3xl font-bold">10.39g</div>
                  <div className="text-sm opacity-90">Protein</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-2xl text-white text-center"
                >
                  <div className="text-3xl font-bold">17.17g</div>
                  <div className="text-sm opacity-90">Lemak</div>
                </motion.div>
              </div>
              
              {/* Additional Info */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  Kandungan per 100g ulat sagu
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg p-4"
            >
              <span className="text-2xl">🌴</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white rounded-full shadow-lg p-4"
            >
              <span className="text-2xl">💪</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
