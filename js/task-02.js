const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsElement = document.querySelector('#ingredients');

const createItemEl = ingredients.map(el => {
  const ingredientsItemsEl = document.createElement('li');
  ingredientsItemsEl.textContent = el;

  return ingredientsItemsEl;
});


ingredientsElement.append(...createItemEl);
// 
// Adds an item to the end of the list
// const Item = document.createElement("li1, li2, li3 ... li6");
// // // const ul = document.querySelector('#ingredient');
// const li = document.createElement('li');
// 