import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/formatCurrency';

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some products to get started!</p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-accent text-white rounded-lg hover:bg-brand-accent/90 transition-all transform hover:scale-105"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div key={item.id} className="glass-card p-6 rounded-xl">
                <div className="flex space-x-6">
                  <Link to={`/products/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg hover:opacity-80 transition-opacity"
                    />
                  </Link>
                  
                  <div className="flex-1">
                    <Link to={`/products/${item.id}`}>
                      <h3 className="text-xl font-semibold mb-2 hover:text-brand-blue transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-4">SKU: {item.sku}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 bg-secondary rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-md bg-white hover:bg-border transition-colors flex items-center justify-center font-semibold"
                          >
                            -
                          </button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-md bg-white hover:bg-border transition-colors flex items-center justify-center font-semibold"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive/80 transition-colors p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-2xl font-bold text-brand-accent">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {formatCurrency(item.price)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 rounded-xl sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-brand-success font-semibold">Calculated at checkout</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-brand-accent">{formatCurrency(totalPrice)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full py-4 bg-brand-accent text-white text-center rounded-lg font-semibold hover:bg-brand-accent/90 transition-all transform hover:scale-105 mb-3"
              >
                Proceed to Checkout
              </Link>
              
              <Link
                to="/products"
                className="block w-full py-4 border-2 border-border text-center rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 p-4 bg-brand-soft rounded-lg">
                <p className="text-sm text-center">
                  <span className="font-semibold text-brand-success">Payment:</span> Cash On Delivery (COD) available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
