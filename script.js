let dishes = [
    {
        name: "Burger",
        price: 20.99,
        category: "Fast Food",
        image: "img/burger.jpg",
        ingredients: "Meat, Cheese, Onion, Bread"
    },

];

const menuContainer = document.getElementById("menu");

dishes.forEach((dish) => {
    const dishCard = document.createElement("div");
    dishCard.classList.add("dish-card");

    dishCard.innerHTML =    
        `<h2 class="dishName">${dish.name}</h2>
        <img src="${dish.image}" alt="${dish.name}">
        <p>Category: ${dish.category}</p>
        <p>Price: $${dish.price.toFixed(2)}</p>
        <p>Ingredients: ${dish.ingredients}</p>`;

    menuContainer.appendChild(dishCard);
});

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const priceInput = document.getElementById("price");

function filterDishes() {
    const searchValue = searchInput.value.toLowerCase();
    const categoryValue = categorySelect.value.toLowerCase();
    const priceValue = parseFloat(priceInput.value);
    menuContainer.innerHTML = "";

    dishes.forEach((dish) => {
        const matchesSearch = dish.name.toLowerCase().includes(searchValue);
        const matchesCategory = categoryValue === "" || dish.category.toLowerCase() === categoryValue;
        const matchesPrice = isNaN(priceValue) || dish.price <= priceValue;

        if (matchesSearch && matchesCategory && matchesPrice) {
            const dishCard = document.createElement("div");
            dishCard.classList.add("dish-card");
            dishCard.innerHTML = `
                <h2>${dish.name}</h2>
                <img src="${dish.image}" alt="${dish.name}">
                <p>Category: ${dish.category}</p>
                <p>Price: ${dish.price.toFixed(2)}</p>
                <p>Ingredients: ${dish.ingredients}</p>
            `;
            menuContainer.appendChild(dishCard);
        }
    });
}

searchInput.addEventListener("input", filterDishes);
categorySelect.addEventListener("change", filterDishes);
priceInput.addEventListener("input", filterDishes);

const newDishBtn = document.getElementById("new-dish-btn");
const newDishForm = document.getElementById("new-dish-form");
const newDishNameInput = document.getElementById("new-dish-name");
const newDishCategoryInput = document.getElementById("new-dish-category");
const newDishImageInput = document.getElementById("new-dish-image");
const newDishPriceInput = document.getElementById("new-dish-price");
const newDishIngredientsInput = document.getElementById("new-dish-ingredients");
const addDishBtn = document.getElementById("add-dish-btn");

function toggleNewDishForm() {
    newDishForm.style.display = newDishForm.style.display === "block" ? "none" : "block";
}

function addDish() {
    const name = newDishNameInput.value;
    const category = newDishCategoryInput.value;
    const image = newDishImageInput.value;
    const price = parseFloat(newDishPriceInput.value);
    const ingredients = newDishIngredientsInput.value;

    const newDish = {
        name: name,
        category: category,
        image: image,
        price: price,
        ingredients: ingredients
    };

    dishes.push(newDish);

    newDishNameInput.value = "";
    newDishCategoryInput.value = "";
    newDishImageInput.value = "";
    newDishPriceInput.value = "";
    newDishIngredientsInput.value = "";

    toggleNewDishForm();

    filterDishes();
}

newDishBtn.addEventListener("click", toggleNewDishForm);
addDishBtn.addEventListener("click", addDish);