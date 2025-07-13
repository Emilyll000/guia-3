import React from "react";

const ProductItem = ({ product, index, removeProduct }) => {
  const subtotal = (product.quantity * product.price).toFixed(2);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 0" }}>
      <span>{product.name} - {product.brand}</span>
      <span>{product.quantity} x ${product.price} = ${subtotal}</span>
      <button onClick={() => removeProduct(index)}>Eliminar</button>
    </div>
  );
};

export default ProductItem;