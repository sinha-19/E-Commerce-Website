import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const DealsPage: React.FC = () => {
  // For this example, we'll consider products with IDs divisible by 3 as "deals"
  const dealsProducts = products.filter(product => product.id % 3 === 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-red-600 text-white p-6 rounded-lg mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Hot Deals! 🔥</h1>
        <p className="text-lg opacity-90">Save up to 20% on selected items</p>
      </div>

      <ProductGrid products={dealsProducts} />
    </div>
  );
};

export default DealsPage;