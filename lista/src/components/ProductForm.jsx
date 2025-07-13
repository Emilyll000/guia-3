"use client";

import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    quantity: 1,
    price: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: name === "quantity" || name === "price" ? Number(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.brand || !product.quantity || !product.price) return;
    addProduct(product);
    setProduct({ name: "", brand: "", quantity: 1, price: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Producto" value={product.name} onChange={handleChange} />
      <input name="brand" placeholder="Marca" value={product.brand} onChange={handleChange} />
      <input name="quantity" type="number" placeholder="Cantidad" value={product.quantity} onChange={handleChange} />
      <input name="price" type="number" placeholder="Precio" step="0.01" value={product.price} onChange={handleChange} />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ProductForm;