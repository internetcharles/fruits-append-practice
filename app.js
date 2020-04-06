import fruits from './data.js';

const fruitContainer = document.getElementById('container');

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
// id
    const id = fruit.id;
// name
    const name = fruit.name;
// image
    const image = fruit.image;
// description
    const description = fruit.description;
// category
    const category = fruit.category;
// price
    const price = fruit.price;


    const fruitLi = document.createElement('li');
    const fruitHeader = document.createElement('h3');
    const fruitImage = document.createElement('img');
    const fruitP = document.createElement('p');

    fruitContainer.append(fruitLi, fruitHeader, fruitImage, fruitP);
    fruitHeader.textContent = name;
    fruitImage.src = 'https://d2ph5fj80uercy.cloudfront.net/05/cat2901.jpg';
    fruitP.textContent = '$' + price + ' - ' + category;
    fruitImage.alt = description;

    if (fruit.name === 'Banana') {
        fruitHeader.style.color = "yellow";
        fruitHeader.style.backgroundColor = "black";
    }
    else if (fruit.name === 'Cherry') {
        fruitHeader.style.color = 'red';
        fruitHeader.style.backgroundColor = 'black';
    }

}