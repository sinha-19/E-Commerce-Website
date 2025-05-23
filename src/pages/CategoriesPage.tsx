import React from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { products, getCategories, getProductsByCategory } from '../data/products';

const CategoriesPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const categories = getCategories();
  const displayProducts = category ? getProductsByCategory(category) : products;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        {category 
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
          : 'All Categories'
        }
      </h1>

      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`/categories/${cat}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${category === cat 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </a>
          ))}
        </div>
      </div>

      <ProductGrid products={displayProducts} />
    </div>
  );
};

export default CategoriesPage;