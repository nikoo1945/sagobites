import { motion } from "framer-motion";
import { useEffect } from "react";

export function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#f0fdf4] via-[#ecfdf5] to-[#d1fae5] flex items-center justify-center fixed inset-0 z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-6xl mb-4"
        >
          🍪
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500"
        >
          Sagobites
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mt-2"
        >
          Memuat...
        </motion.p>
      </div>
    </motion.div>
  );
}
