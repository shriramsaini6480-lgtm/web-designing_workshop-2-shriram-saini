function App() {

  const products = [
    { id: 1, name: "Wireless Mouse", price: 799, category: "Electronics", bg: "#cce5ff", border: "2px solid #0066cc", nameColor: "#0033cc" },
    { id: 2, name: "Running Shoes", price: 2499, category: "Footwear", bg: "#ccffcc", border: "2px solid #006600", nameColor: "#004400" },
    { id: 3, name: "Smart Watch", price: 3999, category: "Gadgets", bg: "#ffcccc", border: "2px solid #cc0000", nameColor: "#cc0000" },
  ];

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#f5f0ff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: "40px",
  };

  const cardsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "24px",
  };

  const cardStyle = (bg, border) => ({
    backgroundColor: bg,
    border: border,
    borderRadius: "12px",
    padding: "24px 30px",
    width: "260px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  });

  const productNameStyle = (color) => ({
    fontSize: "22px",
    fontWeight: "bold",
    color: color,
    marginBottom: "12px",
  });

  const detailStyle = {
    fontSize: "15px",
    color: "#333",
    marginBottom: "6px",
  };

  const labelStyle = {
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Product Showcase</h1>
      <div style={cardsContainerStyle}>
        {products.map((product) => (
          <div key={product.id} style={cardStyle(product.bg, product.border)}>
            <div style={productNameStyle(product.nameColor)}>{product.name}</div>
            <p style={detailStyle}>
              <span style={labelStyle}>Price: </span>₹{product.price}
            </p>
            <p style={detailStyle}>
              <span style={labelStyle}>Category: </span>{product.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;