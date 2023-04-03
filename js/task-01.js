// const ul = document.querySelector('#categories')
// console.dir(ul.children);
// [...ul.children].forEach(item => console.log(item));
const listItems = document.querySelectorAll('#categories li.item');
const leng = listItems.length;
console.log(`Number of categories: ${leng}`);

listItems.forEach((item) =>{
    console.log(`Category: ${item.querySelectorAll('h2')[0].textContent}`);
     console.log(`Elements: ${item.querySelectorAll('li').length}`);
});