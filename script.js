const products = [
    {
        name: "Custom Mug",
        images: ["mug1.jpg", "mug2.jpg", "mug3.jpg"],
        description: "A personalized mug for your favorite beverages.",
        whatsappLink: "https://wa.me/1234567890?text=I%20am%20interested%20in%20Custom%20Mug"
    },
    {
        name: "Printed T-Shirt",
        images: ["shirt1.jpg", "shirt2.jpg", "shirt3.jpg"],
        description: "Stylish and comfortable printed t-shirts.",
        whatsappLink: "https://wa.me/1234567890?text=I%20am%20interested%20in%20Printed%20T-Shirt"
    },
    {
        name: "Customized Tote Bag",
        images: ["bag1.jpg", "bag2.jpg", "bag3.jpg"],
        description: "Eco-friendly tote bags with custom designs.",
        whatsappLink: "https://wa.me/1234567890?text=I%20am%20interested%20in%20Customized%20Tote%20Bag"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".product-list");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <div class="images">
                ${product.images.map(img => `<img src="${img}" alt="${product.name}">`).join("")}
            </div>
            <p>${product.description}</p>
            <a href="${product.whatsappLink}" target="_blank">Order Now</a>
        `;

        productList.appendChild(productDiv);
    });
});
