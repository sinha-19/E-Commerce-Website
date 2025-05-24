import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"/>
        {product.id % 3 === 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            20% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center text-amber-400">
            <Star size={16} fill="#FFC107" />
            <span className="ml-1 text-sm font-semibold">{product.rating}</span>
          </div>
          <span className="ml-1 text-xs text-gray-500">({product.reviews} reviews)</span>
        </div>
        <h3 className="text-gray-800 font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-indigo-600 font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
            aria-label="Add to cart">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;