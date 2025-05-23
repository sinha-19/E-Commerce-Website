import React from 'react';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import QuantitySelector from './QuantitySelector';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const { product, quantity } = item;
  const itemTotal = product.price * quantity;

  return (
    <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200 last:border-b-0">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 sm:mr-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover rounded"
        />
      </div>
      
      {/* Product Details */}
      <div className="flex-1 flex flex-col sm:flex-row">
        <div className="flex-1 mb-4 sm:mb-0">
          <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          <p className="text-indigo-600 font-medium mt-1">${product.price.toFixed(2)}</p>
        </div>
        
        {/* Quantity & Controls */}
        <div className="flex items-center justify-between sm:items-start">
          <QuantitySelector
            quantity={quantity}
            onChange={(newQuantity) => onUpdateQuantity(product.id, newQuantity)}
          />
          
          <div className="flex items-center ml-6">
            <p className="font-semibold text-gray-800 mr-4">
              ${itemTotal.toFixed(2)}
            </p>
            
            <button
              onClick={() => onRemove(product.id)}
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Remove item"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;