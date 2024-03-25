const menuBackground = document.createElement('div');
menuBackground.id = 'menu-background';

const menu = document.createElement('div');
menu.id = 'menu';

const menuItemCreator = () => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menuitem';
    return menuItem;
}
const mealCreator = () => {
    const meal = document.createElement('div');
    meal.className = 'meal';
    return meal;
}
const mealTextCreator = () => {
    const mealText = document.createElement('div');
    mealText.className = 'meal-text';
    return mealText;
}
const priceCreator = () => { 
    const price = document.createElement('div');
    price.className = 'price';
    return price;
}

const cookieItem = menuItemCreator();
const cookieMeal = mealCreator();
cookieMeal.id = 'cookie';
const cookieMealText = mealTextCreator();
cookieMealText.classList.add('cookie');
cookieMealText.innerHTML = 'Gingerbread Man';
const cookiePrice = priceCreator();
cookiePrice.innerHTML = '20 Gold';
cookieMealText.appendChild(cookiePrice);
cookieItem.appendChild(cookieMeal);
cookieItem.appendChild(cookieMealText);

const kebabItem = menuItemCreator();
const kebabMeal = mealCreator();
kebabMeal.id = 'kebab';
const kebabMealText = mealTextCreator();
kebabMealText.classList.add('kebab');
kebabMealText.innerHTML = 'Eye Kebab';
const kebabPrice = priceCreator();
kebabPrice.innerHTML = '20 Gold';
kebabMealText.appendChild(kebabPrice);
kebabItem.appendChild(kebabMealText)
kebabItem.appendChild(kebabMeal);

const margeritaItem = menuItemCreator();
const margeritaMeal = mealCreator();
margeritaMeal.id = 'margerita';
const margeritaMealText = mealTextCreator();
margeritaMealText.classList.add('margerita');
margeritaMealText.innerHTML = 'Eye Margerita';
const margeritaPrice = priceCreator();
margeritaPrice.innerHTML = '20 Gold';
margeritaMealText.appendChild(margeritaPrice);
margeritaItem.appendChild(margeritaMeal);
margeritaItem.appendChild(margeritaMealText);

const smoothieItem = menuItemCreator();
const smoothieMeal = mealCreator();
smoothieMeal.id = 'smoothie';
const smoothieMealText = mealTextCreator();
smoothieMealText.classList.add('smoothie');
smoothieMealText.innerHTML = 'Swamp Smoothie';
const smoothiePrice = priceCreator();
smoothiePrice.innerHTML = '20 Gold';
smoothieMealText.appendChild(smoothiePrice);
smoothieItem.appendChild(smoothieMealText)
smoothieItem.appendChild(smoothieMeal);

const toastItem = menuItemCreator();
const toastMeal = mealCreator();
toastMeal.id = 'toast';
const toastMealText = mealTextCreator();
toastMealText.classList.add('toast');
toastMealText.innerHTML = 'Toadstool Toast';
const toastPrice = priceCreator();
toastPrice.innerHTML = '20 Gold';
toastMealText.appendChild(toastPrice);
toastItem.appendChild(toastMeal);
toastItem.appendChild(toastMealText);

const stewItem = menuItemCreator();
const stewMeal = mealCreator();
stewMeal.id = 'stew';
const stewMealText = mealTextCreator();
stewMealText.classList.add('stew');
stewMealText.innerHTML = "Witcher's Stew";
const stewPrice = priceCreator();
stewPrice.innerHTML = '20 Gold';
stewMealText.appendChild(stewPrice);
stewItem.appendChild(stewMealText)
stewItem.appendChild(stewMeal);
//could be more productive to make it left right whole  menuitem generator with insides but no time to think

menu.appendChild(cookieItem);
menu.appendChild(kebabItem);
menu.appendChild(margeritaItem);
menu.appendChild(smoothieItem);
menu.appendChild(toastItem);
menu.appendChild(stewItem);

menuBackground.appendChild(menu);

export { menuBackground }
