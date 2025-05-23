import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  CreditCard,
  Shield
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Saket</h3>
            <p className="text-gray-400 mb-4">
              We offer high-quality products at the best prices. Shop with confidence with our 30-day money-back guarantee.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/saketkumar.sinha.98" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/sinha__19" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/sinha__19" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/saketkumarsinha19" className="text-gray-400 hover:text-white transition-colors" aria-label="Linkedin">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Deals & Promotions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Information</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">KIIT Deeemed to be University</li>
              <li className="text-gray-400">Bhubaneswar, India 751024</li>
              <li><a href="mailto:imsaket123@gmail.com" className="text-gray-400 hover:text-white transition-colors">support@saket.com</a></li>
              <li><a href="tel:+91-916-208-7327" className="text-gray-400 hover:text-white transition-colors">+91-916-208-7327</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Payment & Security */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <CreditCard size={20} className="mr-2" />
              <span>We accept all major credit cards</span>
            </div>
            <div className="flex items-center">
              <Shield size={20} className="mr-2" />
              <span>Secure payments & data protection</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {currentYear} Saket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;