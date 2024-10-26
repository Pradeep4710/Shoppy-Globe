import React from 'react';
import { Link } from 'react-router-dom';
import { items } from './Data';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ selectedCategory, setCart, searchTerm }) => {
  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase())
      || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm; // Return true if both category and search term match
  });

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    setCart((prevCart) => [...prevCart, obj]);
    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-12">
          {filteredItems.map((product) => (
            <div key={product.id} className="bg-white w-[85%] h-[90%] shadow-md rounded-xl overflow-hidden hover:scale-105 duration-300">
              <Link to={`/product/${product.id}`}>
                <img src={product.imgSrc} alt={product.title} className="p-2 h-[60%] mx-auto" />
              </Link>
              <div className="p-2 px-4">
                <h5 className="text-lg font-bold mb-2">{product.title}</h5>
                <p className="text-gray-700 mb-2 truncate">{product.description}</p>
                <p className="text-center text-gray-900 font-bold mb-2">₹{product.price}</p>
                <div className="flex justify-around">
                  <button
                    onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                    className="btn btn-warning bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-xl transition duration-300"
                  >
                    Add To Cart
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-green-500 hover:bg-green-600 text-white mx-2 py-1 px-2 rounded-xl transition duration-300"
                  >
                    Product Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;