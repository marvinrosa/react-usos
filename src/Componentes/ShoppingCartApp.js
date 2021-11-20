import React, { useState } from "react";

const initialCart = [
  {
    id: 1632345605045,
    title: "First Product",
    description: "First Short Description",
  },
  {
    id: 7567345603456,
    title: "Second Product",
    description: "Second Short Description",
  },
];
const ShoppingCartApp = () => {
  const [cart, setCart] = useState(initialCart);

  const deleteProduct = (idProduct) => {
    const changedCart = cart.filter((product) => product.id !== idProduct);
    setCart(changedCart);
  };

  const addProduct = (newProduct) => {
    newProduct.id = Date.now();

    const changedCart = [newProduct, ...cart];
    setCart(changedCart);
  };
  return (
    <>
      <h1>ShoppingCartApp</h1>
      <hr />
      <button
        onClick={() =>
          addProduct({
            title: "Other Product",
            description: "Other Short Description",
          })
        }
      >
        Add
      </button>

      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <hr />
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <hr />
            <h2>
              {product.id} - {product.title}
            </h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoppingCartApp;
