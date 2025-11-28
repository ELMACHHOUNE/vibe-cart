import { X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/formatCurrency';

interface CartSlideOverProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSlideOver = ({ isOpen, onClose }: CartSlideOverProps) => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Slide Over */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 animate-slide-in-right overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6" />
              <span>Your Cart</span>
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex space-x-4 glass-card p-4 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                      <p className="text-brand-accent font-bold">
                        {formatCurrency(item.price)}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-secondary hover:bg-border transition-colors flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-secondary hover:bg-border transition-colors flex items-center justify-center"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-destructive text-sm hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-brand-success">Calculated at checkout</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-brand-accent">{formatCurrency(totalPrice)}</span>
                </div>
              </div>

              {/* Actions */}
              <Link
                to="/cart"
                onClick={onClose}
                className="block w-full bg-brand-accent text-white text-center py-3 rounded-lg hover:bg-brand-accent/90 transition-colors font-semibold mb-3"
              >
                View Cart
              </Link>
              <button
                onClick={onClose}
                className="w-full border border-border py-3 rounded-lg hover:bg-secondary transition-colors font-semibold"
              >
                Continue Shopping
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSlideOver;
