import { Link } from 'react-router-dom';
import { ArrowRight, Package, Shield, Truck, Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';

const Home = () => {
  const featuredProducts = productsData.slice(0, 4);

  const categories = [
    { name: 'Electronics', icon: '📱', color: 'from-brand-blue to-brand-accent' },
    { name: 'Fashion', icon: '👕', color: 'from-brand-accent to-brand-success' },
    { name: 'Sports', icon: '⚽', color: 'from-brand-success to-brand-blue' },
    { name: 'Home', icon: '🏠', color: 'from-brand-blue to-brand-dark' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Verified Buyer', comment: 'Amazing quality and fast shipping!', rating: 5 },
    { name: 'Mike Chen', role: 'Verified Buyer', comment: 'Best online shopping experience ever.', rating: 5 },
    { name: 'Emma Wilson', role: 'Verified Buyer', comment: 'Great prices and excellent customer service.', rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-soft via-white to-brand-soft py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue rounded-full filter blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-slide-up">
              Discover Your
              <span className="bg-gradient-to-r from-brand-blue to-brand-accent bg-clip-text text-transparent"> Perfect </span>
              Find
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Quality products, unbeatable prices, and a shopping experience you'll love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/products"
                className="px-8 py-4 bg-brand-accent text-white rounded-lg font-semibold hover:bg-brand-accent/90 transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-white border-2 border-brand-blue text-brand-blue rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/products?category=${cat.name}`}
                className="glass-card p-8 text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-lg group-hover:text-brand-blue transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              to="/products"
              className="text-brand-blue hover:text-brand-accent transition-colors flex items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-soft rounded-full flex items-center justify-center">
                <Truck className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="font-bold text-xl mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On orders over $50</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-soft rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-brand-success" />
              </div>
              <h3 className="font-bold text-xl mb-2">Secure Payment</h3>
              <p className="text-muted-foreground">Safe & secure checkout</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-soft rounded-full flex items-center justify-center">
                <Package className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="font-bold text-xl mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of happy customers today!</p>
          <Link
            to="/products"
            className="inline-block px-8 py-4 bg-white text-brand-blue rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
