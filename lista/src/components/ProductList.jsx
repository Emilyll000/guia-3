"use client";

import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => setProducts([...products, product]);

  const removeProduct = (index) => {
    const newList = [...products];
    newList.splice(index, 1);
    setProducts(newList);
  };

  const total = products.reduce((sum, p) => sum + p.quantity * p.price, 0).toFixed(2);

  return (
    <div>
      <h2>Lista de Compras</h2>
      <ProductForm addProduct={addProduct} />
      <hr />
      {products.map((product, i) => (
        <ProductItem key={i} product={product} index={i} removeProduct={removeProduct} />
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default ProductList;