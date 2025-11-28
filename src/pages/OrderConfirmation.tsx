import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle, Package, MapPin, CreditCard } from 'lucide-react';
import { formatCurrency } from '@/utils/formatCurrency';

const OrderConfirmation = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8 animate-scale-in">
          <CheckCircle className="w-20 h-20 text-brand-success mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-primary mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground">Thank you for your purchase</p>
        </div>

        <div className="glass-card p-8 rounded-xl mb-6 animate-slide-up">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Order ID</p>
              <p className="text-xl font-bold text-primary">{order.id}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Order Date</p>
              <p className="font-semibold">
                {new Date(order.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>

          {/* Customer Info */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <MapPin className="w-5 h-5 text-brand-blue" />
              <h3 className="font-bold text-lg">Delivery Address</h3>
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="font-semibold">{order.customerInfo.name}</p>
              <p className="text-sm text-muted-foreground">{order.customerInfo.phone}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {order.customerInfo.address}, {order.customerInfo.city}, {order.customerInfo.zipCode}
              </p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <CreditCard className="w-5 h-5 text-brand-blue" />
              <h3 className="font-bold text-lg">Payment Method</h3>
            </div>
            <div className="bg-brand-soft p-4 rounded-lg">
              <p className="font-semibold text-brand-success">{order.paymentMethod}</p>
              <p className="text-sm text-muted-foreground mt-1">
                You will pay {formatCurrency(order.total)} when you receive your order
              </p>
            </div>
          </div>

          {/* Order Items */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Package className="w-5 h-5 text-brand-blue" />
              <h3 className="font-bold text-lg">Order Items</h3>
            </div>
            <div className="space-y-3">
              {order.items.map((item: any) => (
                <div key={item.id} className="flex items-center space-x-4 p-3 bg-secondary rounded-lg">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-brand-accent">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex justify-between items-center text-2xl font-bold">
              <span>Total Amount</span>
              <span className="text-brand-accent">{formatCurrency(order.total)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/products"
            className="flex-1 py-4 bg-brand-accent text-white text-center rounded-lg font-semibold hover:bg-brand-accent/90 transition-all"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="flex-1 py-4 border-2 border-border text-center rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-8 p-6 bg-brand-soft rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            We'll send you tracking information once your order ships. Questions? Contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
