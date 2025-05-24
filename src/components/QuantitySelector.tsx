import React from 'react';
import { Plus, Minus } from 'lucide-react';
interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  maxQuantity?: number;
}
const QuantitySelector: React.FC<QuantitySelectorProps> = ({ 
  quantity, 
  onChange, 
  maxQuantity = 10 
}) => {
  const decreaseQuantity = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    if (!maxQuantity || quantity < maxQuantity) {
      onChange(quantity + 1);
    }
  };
  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <button
        onClick={decreaseQuantity}
        disabled={quantity <= 1}
        className={`p-2 ${
          quantity <= 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      
      <span className="px-4 py-2 border-x border-gray-300 min-w-[40px] text-center">
        {quantity}
      </span>
      
      <button
        onClick={increaseQuantity}
        disabled={maxQuantity ? quantity >= maxQuantity : false}
        className={`p-2 ${
          maxQuantity && quantity >= maxQuantity 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Increase quantity">
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;