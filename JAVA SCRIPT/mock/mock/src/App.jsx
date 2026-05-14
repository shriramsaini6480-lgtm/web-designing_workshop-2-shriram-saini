// App.jsx
import "./app.css";



function App() {
  const products = [
    {
      name: "Wireless Mouse",
      price: "₹799",
      category: "Electronics",
      className: "blue-card",
    },
    {
      name: "Running Shoes",
      price: "₹2499",
      category: "Footwear",
      className: "green-card",
    },
    {
      name: "Smart Watch",
      price: "₹3999",
      category: "Gadgets",
      className: "pink-card",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Product Showcase</h1>

      <div className="product-row">
        {products.slice(0, 2).map((product, index) => (
          <div className={`card ${product.className}`} key={index}>
            <h2>{product.name}</h2>
            <p>
              <strong>Price:</strong> {product.price}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
          </div>
        ))}
      </div>

      <div className="bottom-card">
        <div className={`card ${products[2].className}`}>
          <h2>{products[2].name}</h2>
          <p>
            <strong>Price:</strong> {products[2].price}
          </p>
          <p>
            <strong>Category:</strong> {products[2].category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;