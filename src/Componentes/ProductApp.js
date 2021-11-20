import React, { useState } from "react";

const initialProducts = {
  title: "Title product",
  description: "Short Description",
  image: {
    small: "",
    medium: "",
    big: "",
  },
};

const ProductApp = () => {
  const [product, setProduct] = useState(initialProducts);

  const updateProduct = (property, value) => {
    setProduct({
      ...product,
      [property]: value,
    });
  };

  return (
    <>
      <h1>ProductApp</h1>
      <button
        onClick={() => updateProduct("description", "New short description")}
      >
        Update
      </button>
      <hr />
      <h2>{product.title}</h2>
      <h3>{product.description}</h3>
      <img src={product.image?.medium} alt="" />
    </>
  );
};

export default ProductApp;
