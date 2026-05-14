const products = [
    { id: 1, name: "Smart Watches", price: 49.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._CB639924221_.jpg" },
    { id: 2, name: "Laptops & Tablets", price: 899.00, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X._CB418608471_.jpg" },
    { id: 3, name: "Home Decor", price: 25.50, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Home_379x304_1X._CB418608471_.jpg" },
    { id: 4, name: "Pet Supplies", price: 12.99, image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._CB639746743_.jpg" }
];

let cartCount = 0;
const grid = document.getElementById('product-grid');
const countDisplay = document.getElementById('cart-count');

// Render Products
function renderProducts() {
    products.forEach(product => {
        const box = document.createElement('div');
        box.className = 'box';
        box.innerHTML = `
            <div class="box-content">
                <h2>${product.name}</h2>
                <div class="box-img" style="background-image: url('${product.image}')"></div>
                <p>$${product.price}</p>
                <button class="add-btn" onclick="addToCart()">Add to Cart</button>
            </div>
        `;
        grid.appendChild(box);
    });
}

function addToCart() {
    cartCount++;
    countDisplay.innerText = cartCount;
    alert("Item added to cart!");
}

renderProducts();