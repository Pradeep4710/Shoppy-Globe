import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchTerm(inputValue); // Update the search term when the button is clicked
  };

  return (
    <header className='flex justify-around font-serif bg-yellow-200 p-2'>
      <Link to='/' className="text-4xl">Shoppy Globe.</Link>
      <div className="flex items-center">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-96 h-11 p-4 rounded-xl bg-purple-200 placeholder-slate-500"
          type="text"
          placeholder='Search products...'
        />
        <button 
          onClick={handleSearch} 
          className="ml-2 h-11 bg-blue-500 text-white rounded-xl px-4 transition duration-300 hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div>
        <Link to="/cart">
          <button className='px-4 py-2 bg-purple-300 rounded-xl'>
            <img className="w-8 h-8" src='https://imgur.com/JsPT6Fr' alt="Cart" />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
