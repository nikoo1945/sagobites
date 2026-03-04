import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureCards } from "./components/FeatureCards";
import { StatsSection } from "./components/StatsSection";
import { NutritionSection } from "./components/NutritionSection";
import { EducationSection } from "./components/EducationSection";
import { ReferencesSection } from "./components/ReferencesSection";
import { OrderSection } from "./components/OrderSection";
import { AIChatSection } from "./components/AIChatSection";
import { CartDrawer } from "./components/CartDrawer";
import { LoadingScreen } from "./components/LoadingScreen";
import { CartProvider } from "./context/CartContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CartProvider>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <FeatureCards />
            <StatsSection />
            <NutritionSection />
            <EducationSection />
            <ReferencesSection />
            <OrderSection />
            <AIChatSection />
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">SAGO BITES</h3>
                  <p className="text-gray-400 text-sm">
                    Cookies protein tinggi dari ulat sagu untuk pencegahan stunting.
                    Inovasi pangan lokal Indonesia.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Tautan</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#fitur" className="hover:text-green-400">Fitur</a></li>
                    <li><a href="#tentang" className="hover:text-green-400">Tentang</a></li>
                    <li><a href="#kontak" className="hover:text-green-400">Kontak</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Kontak</h4>
                  <p className="text-gray-400 text-sm">WhatsApp: 628964342878</p>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                © 2024 SAGO BITES. All rights reserved.
              </div>
            </div>
          </footer>
          
          <CartDrawer />
        </motion.div>
      )}
    </CartProvider>
  );
}

export default App;

