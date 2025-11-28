import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/formatCurrency';
import { ShoppingBag, Package } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const orderId = `ORD-${Date.now()}`;
    const order = {
      id: orderId,
      items,
      total: totalPrice,
      customerInfo: formData,
      paymentMethod: 'Cash On Delivery (COD)',
      date: new Date().toISOString(),
    };

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

    // Clear cart and navigate to confirmation
    clearCart();
    navigate('/order-confirmation', { state: { order } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-input rounded-lg border ${
                      errors.name ? 'border-destructive' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-brand-blue`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-input rounded-lg border ${
                      errors.phone ? 'border-destructive' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-brand-blue`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-input rounded-lg border ${
                      errors.address ? 'border-destructive' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-brand-blue`}
                    placeholder="123 Main Street, Apt 4B"
                  />
                  {errors.address && <p className="text-destructive text-sm mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-input rounded-lg border ${
                        errors.city ? 'border-destructive' : 'border-border'
                      } focus:outline-none focus:ring-2 focus:ring-brand-blue`}
                      placeholder="New York"
                    />
                    {errors.city && <p className="text-destructive text-sm mt-1">{errors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-input rounded-lg border ${
                        errors.zipCode ? 'border-destructive' : 'border-border'
                      } focus:outline-none focus:ring-2 focus:ring-brand-blue`}
                      placeholder="10001"
                    />
                    {errors.zipCode && <p className="text-destructive text-sm mt-1">{errors.zipCode}</p>}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-brand-soft rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Package className="w-6 h-6 text-brand-success" />
                  <h3 className="font-bold text-lg">Payment Method</h3>
                </div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-brand-success">Cash On Delivery (COD)</span> - Pay when you receive your order
                </p>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-4 bg-brand-accent text-white rounded-lg font-semibold hover:bg-brand-accent/90 transition-all transform hover:scale-105"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 rounded-xl sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-3 pb-3 border-b border-border">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <p className="font-medium text-sm line-clamp-1">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">{formatCurrency(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-brand-success font-semibold">Free</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-brand-accent">{formatCurrency(totalPrice)}</span>
                </div>
              </div>

              <div className="p-4 bg-brand-soft rounded-lg">
                <p className="text-sm text-center font-medium">
                  Pay <span className="text-brand-success font-bold">{formatCurrency(totalPrice)}</span> when you receive your order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
