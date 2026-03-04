import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal, clearCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    const message = cart.map(item => 
      `${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`
    ).join('\n');
    
    const totalMessage = `Halo SAGO BITES! Saya ingin memesan:\n\n${message}\n\nTotal: ${formatPrice(cartTotal)}\n\nMohon informasi selanjutnya.`;
    const waUrl = `https://wa.me/628964342878?text=${encodeURIComponent(totalMessage)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-green-600" />
                <h2 className="text-lg font-bold">Keranjang Belanja</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Keranjang Anda kosong</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 bg-gray-50 p-3 rounded-xl"
                    >
                      <div className="text-4xl">{item.image}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-green-600 font-bold">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 bg-white rounded-full shadow hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 bg-white rounded-full shadow hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded-full"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total:</span>
                  <span className="text-2xl font-bold text-green-600">{formatPrice(cartTotal)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Checkout via WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-gray-500 hover:text-red-500 py-2 text-sm transition"
                >
                  Kosongkan Keranjang
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
