import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { totalItems } = useCart();

  const categories = ['Electronics', 'Fashion', 'Sports', 'Accessories', 'Home'];

  return (
    <nav className="sticky top-0 z-50 glass-card shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-primary">ShopHub</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 bg-input rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center space-x-1 text-foreground hover:text-brand-blue transition-colors"
              >
                <span>Categories</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isCategoryOpen && (
                <div className="absolute top-full mt-2 w-48 glass-card rounded-lg shadow-lg py-2 animate-scale-in">
                  {categories.map(cat => (
                    <Link
                      key={cat}
                      to={`/products?category=${cat}`}
                      className="block px-4 py-2 hover:bg-secondary transition-colors"
                      onClick={() => setIsCategoryOpen(false)}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="text-foreground hover:text-brand-blue transition-colors">
              About
            </Link>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <Link to="/cart" className="relative p-2 hover:bg-secondary rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 bg-input rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Link
                to="/products"
                className="block px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              {categories.map(cat => (
                <Link
                  key={cat}
                  to={`/products?category=${cat}`}
                  className="block px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {cat}
                </Link>
              ))}
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/cart"
                className="flex items-center justify-between px-4 py-2 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Cart</span>
                {totalItems > 0 && (
                  <span className="bg-brand-accent text-white text-xs font-bold rounded-full px-2 py-1">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
