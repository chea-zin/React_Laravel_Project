import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-gray-500">Stock: {product.stock}</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}