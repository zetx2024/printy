// Data for Products
const products = [
    {
        id: 1,
        name: "Custom Mug",
        images: ["https://picsum.photos/200/300?random=1", "https://picsum.photos/200/300?random=2", "https://picsum.photos/200/300?random=3"],
        description: "A personalized mug for your favorite beverages.",
        whatsappLink: "https://wa.me/1234567890?text=I%20am%20interested%20in%20Custom%20Mug"
    },
    {
        id: 2,
        name: "Printed T-Shirt",
        images: ["shirt1.jpg", "shirt2.jpg", "shirt3.jpg"],
        description: "Stylish and comfortable printed t-shirts.",
        whatsappLink: "https://wa.me/1234567890?text=I%20am%20interested%20in%20Printed%20T-Shirt"
    },
    {
        id: 3,
        name: "Customized Tote Bag",
        images: ["bag1.jpg", "bag2.jpg", "bag3.jpg"],
        description: "Eco-friendly tote bags with custom designs.",
        whatsappLink: "https://wa.me/1234567890?text=I%20am%20interested%20in%20Customized%20Tote%20Bag"
    }
];

// Populate Product List on Main Page
if (document.querySelector(".product-list")) {
    const productList = document.querySelector(".product-list");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.images[0]}" alt="${product.name}">
            <p>${product.description.substring(0, 50)}...</p>
            <a href="product.html?id=${product.id}" class="view-details">View Details</a>
        `;

        productList.appendChild(productDiv);
    });
}

// Populate Product Details on Product Page
if (window.location.pathname.endsWith("product.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("order-link").href = product.whatsappLink;

        const mainImage = document.getElementById("main-image");
        const thumbnails = document.querySelector(".thumbnails");

        mainImage.src = product.images[0];
        product.images.forEach((img, index) => {
            const thumb = document.createElement("img");
            thumb.src = img;
            thumb.alt = product.name;
            thumb.classList.add(index === 0 ? "active" : "");
            thumb.addEventListener("click", () => {
                mainImage.src = img;
                document.querySelectorAll(".thumbnails img").forEach(t => t.classList.remove("active"));
                thumb.classList.add("active");
            });
            thumbnails.appendChild(thumb);
        });
    }
}
