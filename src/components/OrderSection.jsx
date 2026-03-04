import { motion } from "framer-motion";
import { ShoppingCart, Star, Package, Truck, CheckCircle, ChefHat } from "lucide-react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "SAGO BITES Original",
    price: 25000,
    description: "Rasa original yang lezat dari ulat sagu",
    rating: 4.9,
    reviews: 128,
    image: "🐛",
    badge: "Terlaris",
    nutrition: { protein: "10.39g", fat: "17.17g" },
  },
  {
    id: 2,
    name: "SAGO BITES Coklat",
    price: 28000,
    description: "dengan rasa coklat premium",
    rating: 4.8,
    reviews: 86,
    image: "🍫",
    badge: null,
    nutrition: { protein: "9.5g", fat: "18g" },
  },
  {
    id: 3,
    name: "SAGO BITES Keju",
    price: 28000,
    description: "dengan rasa keju autentiko",
    rating: 4.9,
    reviews: 64,
    image: "🧀",
    badge: "Baru",
    nutrition: { protein: "9.8g", fat: "17.5g" },
  },
];

const ingredients = [
  "30g Tepung Ulat Sagu",
  "60g Tepung Tapioka", 
  "30g Tepung Beras",
  "30g Gula Aren",
  "1 Butir Telur Ayam",
  "40g Margarin",
  "15g Susu Bubuk",
  "10g Madu Alami",
  "1g Vanili Bubuk",
];

export function OrderSection() {
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="produk" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ShoppingCart size={16} />
            <span>Pre-Order</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Pesan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Sagobites
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Pilih varian favorit Anda dan nikmati manfaat Sagobites untuk keluarga
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {product.badge && (
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </div>
              )}
              
              <div className="text-6xl text-center mb-4">{product.image}</div>
              
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm text-center mt-1">
                {product.description}
              </p>
              
              <div className="flex items-center justify-center gap-1 mt-3">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-medium text-sm hover:shadow-lg transition-shadow flex items-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Tambah
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Package className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Kemasan Segel</h4>
              <p className="text-sm text-gray-600">Terjamin kesegaran</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Gratis Ongkir</h4>
              <p className="text-sm text-gray-600">Min. pesan 3 pack</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Garansi Uang Kembali</h4>
              <p className="text-sm text-gray-600">100% satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

