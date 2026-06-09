// ==========================================
// 1. LOCAL STORAGE LOGIC
// ==========================================
const noteInput = document.getElementById('noteInput');
const saveBtn = document.getElementById('saveBtn');
const storageStatus = document.getElementById('storageStatus');

// Check if there is any previously saved note when page loads
window.addEventListener('load', function() {
    const savedNote = localStorage.getItem('userNote');
    if (savedNote) {
        noteInput.value = savedNote; // Restore saved text into textarea
        storageStatus.textContent = "Status: Restored last saved note from browser memory.";
        storageStatus.style.color = "#1e90ff"; // Blue info text
    }
});

// Save current input text into local storage when button is clicked
saveBtn.addEventListener('click', function() {
    const textToSave = noteInput.value;
    localStorage.setItem('userNote', textToSave); // Saving data
    storageStatus.textContent = "Status: Note successfully saved to Local Storage!";
    storageStatus.style.color = "#2ed573"; // Green success text
});


// ==========================================
// 2. PRODUCT LISTING, FILTERING & SORTING LOGIC
// ==========================================

// Dummy Data Array for products
const productsData = [
    { id: 1, name: "Wireless Headphones", category: "electronics", price: 50 },
    { id: 2, name: "Smart Watch", category: "electronics", price: 120 },
    { id: 3, name: "Leather Jacket", category: "fashion", price: 85 },
    { id: 4, name: "Running Shoes", category: "fashion", price: 45 },
    { id: 5, name: "Bluetooth Speaker", category: "electronics", price: 30 },
    { id: 6, name: "Casual Denim Shirt", category: "fashion", price: 25 }
];

const productGrid = document.getElementById('productGrid');
const categoryFilter = document.getElementById('categoryFilter');
const priceSort = document.getElementById('priceSort');

// Function to render / display items on UI
function displayProducts(productsArray) {
    productGrid.innerHTML = ""; // Clear existing grid items

    if(productsArray.length === 0) {
        productGrid.innerHTML = "<p>No products match your criteria.</p>";
        return;
    }

    productsArray.forEach(product => {
        const card = document.createElement('div');
        card.className = "product-card";
        card.innerHTML = `
            <span class="category">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="price">$${product.price}</div>
        `;
        productGrid.appendChild(card);
    });
}

// Function to process filtering and sorting together
function filterAndSortProducts() {
    let currentProducts = [...productsData]; // Create a copy of original array

    // Step A: Filtering Logic
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== "all") {
        currentProducts = currentProducts.filter(item => item.category === selectedCategory);
    }

    // Step B: Sorting Logic
    const selectedSortOrder = priceSort.value;
    if (selectedSortOrder === "lowToHigh") {
        currentProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortOrder === "highToLow") {
        currentProducts.sort((a, b) => b.price - a.price);
    }

    // Update screen UI with filtered & sorted result
    displayProducts(currentProducts);
}

// Attach event listeners to dropdown change selections
categoryFilter.addEventListener('change', filterAndSortProducts);
priceSort.addEventListener('change', filterAndSortProducts);

// Initial call to display all products right after page opens
displayProducts(productsData);