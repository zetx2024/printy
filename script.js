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


// Populate Product Details and Slider on Product Page
if (window.location.pathname.endsWith("product.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const product = products.find(p => p.id == productId);

    if (product) {
        // Set Product Details
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("order-link").href = product.whatsappLink;

        // Populate Slider
        const sliderWrapper = document.querySelector(".slider-wrapper");
        product.images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image;
            imgElement.alt = `${product.name} Image`;
            sliderWrapper.appendChild(imgElement);
        });

        // Initialize Slider
        initializeSlider();
    } else {
        document.getElementById("product-details").innerHTML = "<p>Product not found.</p>";
    }
}

// Slider Functionality
function initializeSlider() {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const images = sliderWrapper.querySelectorAll("img");
    let currentIndex = 0;

    const prevBtn = document.querySelector(".slider-btn.prev");
    const nextBtn = document.querySelector(".slider-btn.next");

    // Show the first image
    images[currentIndex].classList.add("active");

    function updateSlider(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
        sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
    });
}
