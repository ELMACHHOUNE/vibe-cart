import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold">ShopHub</span>
            </div>
            <p className="text-sm opacity-90">
              Your destination for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm opacity-90 hover:opacity-100 hover:text-brand-accent transition-all">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-brand-accent transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm opacity-90 hover:opacity-100 hover:text-brand-accent transition-all">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-90">Contact Us</li>
              <li className="text-sm opacity-90">Shipping Info</li>
              <li className="text-sm opacity-90">Returns</li>
              <li className="text-sm opacity-90">FAQ</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-sm opacity-90 mb-4">
              Subscribe for exclusive deals and updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <button className="px-4 py-2 bg-brand-accent text-white rounded-lg hover:bg-brand-accent/90 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75 mb-4 md:mb-0">
            © 2024 ShopHub. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="opacity-75 hover:opacity-100 hover:text-brand-accent transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-75 hover:opacity-100 hover:text-brand-accent transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-75 hover:opacity-100 hover:text-brand-accent transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
