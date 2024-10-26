import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.find((product) => product.id === parseInt(id));
    setProduct(filterProduct || {});

    if (filterProduct) {
      const relatedProducts = items.filter(
        (item) => item.category === filterProduct.category && item.id !== filterProduct.id
      ).slice(0, 3);

      setRelatedProducts(relatedProducts);
    }
  }, [id]);

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
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/4 mx-8">
            <img src={product.imgSrc} alt={product.title} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left md:ml-4">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">Price: ₹{product.price}</p>
            <button
              onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
              className="btn btn-warning"
            >
              Add To Cart
            </button>
            <button 
            onClick={() => window.open(product.amazonLink, "_blank") }
            className="btn bg-green-500 mx-2 btn-warning">
              Amazon Link
            </button>
          </div>
        </div>

        <h1 className="text-center text-2xl font-bold mt-6">Related Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 mt-4">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={relatedProduct.imgSrc} alt={relatedProduct.title} className="h-80 object-cover mb-2 rounded" />
              <h2 className="font-semibold">{relatedProduct.title}</h2>
              <p className="text-gray-600">Price: ₹{relatedProduct.price}</p>
              <button
                onClick={() => addToCart(relatedProduct.id, relatedProduct.price, relatedProduct.title, relatedProduct.description, relatedProduct.imgSrc)}
                className="mt-2 btn btn-warning"
              >
                Add To Cart
              </button>
              <button 
                onClick={() => window.open(product.amazonLink, "_blank") }
                className="btn bg-green-500 mx-2 btn-warning">
                Amazon Link
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;