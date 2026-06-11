import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productData = [
      {
        id: 1,
        name: "Wireless Mouse",
        price: 799,
        category: "Electronics",
        bgColor: "#b3e5fc",
        borderColor: "#2196f3",
      },
      {
        id: 2,
        name: "Running Shoes",
        price: 2499,
        category: "Footwear",
        bgColor: "#b9f6ca",
        borderColor: "#4caf50",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: 3999,
        category: "Gadgets",
        bgColor: "#ffcdd2",
        borderColor: "#f44336",
      },
    ];

    setProducts(productData);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "maroon",
          marginBottom: "40px",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        Product Showcase
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: product.bgColor,
              border: `3px solid ${product.borderColor}`,
              borderRadius: "15px",
              padding: "20px",
              width: "260px",
              textAlign: "center",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            <h2
              style={{
                color: product.borderColor,
                marginBottom: "15px",
              }}
            >
              {product.name}
            </h2>

            <p style={{ fontSize: "18px" }}>
              <strong>Price:</strong> ₹{product.price}
            </p>

            <p style={{ fontSize: "18px" }}>
              <strong>Category:</strong> {product.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;