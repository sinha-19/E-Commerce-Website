import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/QuantitySelector';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Get product from ID parameter
  const product = id ? getProductById(parseInt(id, 10)) : undefined;
  
  // Redirect to home if product not found
  useEffect(() => {
    if (!product && id) {
      navigate('/');
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return <div className="container mx-auto px-4 py-12">Loading...</div>;
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors mb-6"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to products
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-auto object-cover rounded transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            
            {/* Price & Rating */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>
                {product.id % 3 === 0 && (
                  <p className="text-gray-500 line-through text-sm">${(product.price * 1.2).toFixed(2)}</p>
                )}
              </div>
              
              <div className="flex items-center bg-gray-100 px-3 py-1 rounded">
                <Star size={16} fill="#FFC107" className="text-amber-400" />
                <span className="ml-1 font-medium">{product.rating}</span>
                <span className="ml-1 text-gray-500 text-sm">({product.reviews})</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Category */}
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500">Category:</span>
              <span className="ml-2 text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
            </div>
            
            {/* Quantity & Add to Cart */}
            <div className="flex items-center space-x-4 mb-8">
              <QuantitySelector 
                quantity={quantity} 
                onChange={setQuantity} 
              />
              
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-colors duration-300"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
            </div>
            
            {/* Shipping & Returns */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-start">
                <Truck size={20} className="text-gray-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Free Shipping</h3>
                  <p className="text-sm text-gray-600">Free standard shipping on orders over $50</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield size={20} className="text-gray-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">30-Day Returns</h3>
                  <p className="text-sm text-gray-600">Return for any reason within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;