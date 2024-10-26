import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to ShoppyGlobe! We are dedicated to providing you with the best online shopping experience. 
        Our goal is to connect you with a wide range of products at your fingertips.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our team is passionate about e-commerce and technology. We believe in empowering our customers 
        by offering a seamless shopping experience that is both efficient and enjoyable.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Thank you for choosing us! If you have any questions or feedback, feel free to reach out to us.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our mission is to deliver high-quality products and exceptional customer service, 
        making your shopping experience memorable and satisfying.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-4">
        For any inquiries, please email us at: <a href="mailto:support@shoppyglobe.com" className="text-blue-500">support@shoppyglobe.com</a>
      </p>
    </div>
  );
};

export default About;