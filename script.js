// Data for Products
const products = [
    {
        id: 1,
        name: "Custom Mug",
        images: ["https://picsum.photos/200/300.jpg", "https://picsum.photos/200/300.jpg", "https://picsum.photos/200/300.jpg"],
        description: "A personalized mug for your favorite beverages.",
        whatsappLink: "https://wa.me/1234567890?text=I%20am%20interested%20in%20Custom%20Mug"
    },
    {
        id: 2,
        name: "Printed T-Shirt",
        images: ["https://picsum.photos/200/300.jpg", "https://picsum.photos/200/300.jpg", "https://picsum.photos/200/300.jpg"],
        description: "Stylish and comfortable printed t-shirts.",
        whatsappLink: "https://wa.me/1234567890?text=I%20am%20interested%20in%20Printed%20T-Shirt"
    },
    {
        id: 3,
        name: "Customized Tote Bag",
        images: ["https://picsum.photos/200/300.jpg", "https://picsum.photos/200/300.jpg", "https://picsum.photos/200/300.jpg"],
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
