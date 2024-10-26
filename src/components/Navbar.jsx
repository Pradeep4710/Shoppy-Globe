import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setSelectedCategory, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Reset search term when category is selected
    navigate("/"); // Navigate to home when category is selected
  };

  return (
    <nav className="bg-yellow-300 p-3 my-4 rounded-xl">
      <ul className="flex justify-around">
        <li>
          <Link to="/" onClick={() => handleCategoryClick('all')} className="p-2 px-4 text-lg hover:bg-purple-300 bg-purple-200 rounded-lg duration-200">Home</Link>
        </li>
        <li>
          <Link to="/about" className="p-2 px-4 text-lg hover:bg-purple-300 bg-purple-200 rounded-lg duration-200">About</Link>
        </li>
        <li>
          <button onClick={() => handleCategoryClick('mobiles')} className="p-2 px-4 text-lg hover:bg-purple-300 bg-purple-200 rounded-lg duration-200">Mobiles</button>
        </li>
        <li>
          <button onClick={() => handleCategoryClick('laptops')} className="p-2 px-4 text-lg hover:bg-purple-300 bg-purple-200 rounded-lg duration-200">Laptops</button>
        </li>
        <li>
          <button onClick={() => handleCategoryClick('tablets')} className="p-2 px-4 text-lg hover:bg-purple-300 bg-purple-200 rounded-lg duration-200">Tablets</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;