import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data'; // Adjust this path as necessary

const SearchItem = () => {
  const { term } = useParams();
  const searchWords = term.toLowerCase().split(' '); // Split the search term into words

  const filteredItems = items.filter(item => {
    const titleMatch = searchWords.some(word => 
      item.title.toLowerCase().includes(word)
    );
    const descriptionMatch = searchWords.some(word => 
      item.description.toLowerCase().includes(word)
    );
    return titleMatch || descriptionMatch;
  });

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{term}"</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.length > 0 ? (
          filteredItems.map(product => (
            <div key={product.id} className="bg-white w-[85%] h-[90%] shadow-md rounded-xl overflow-hidden hover:scale-105 duration-300 mx-4 mb-4">
              <Link to={`/product/${product.id}`}>
                <img src={product.imgSrc} alt={product.title} className="p-2 h-[60%] mx-auto" />
              </Link>
              <div className="p-2 px-4">
                <h5 className="text-lg font-bold mb-2">{product.title}</h5>
                <p className="text-gray-700 mb-2 truncate">{product.description}</p>
                <p className="text-center text-gray-900 font-bold mb-2">₹{product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchItem;