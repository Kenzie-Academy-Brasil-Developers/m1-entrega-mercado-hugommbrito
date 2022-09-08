let fruitMain = document.querySelector('.fruits')
let fruitList = document.createElement('ul')
fruitMain.appendChild(fruitList)

let drinkMain = document.querySelector('.drinks')
let drinkList = document.createElement('ul')
drinkMain.appendChild(drinkList)

let hygieneMain = document.querySelector('.hygiene')
let hygieneList = document.createElement('ul')
hygieneMain.appendChild(hygieneList)


for (let i = 0; i < products.length; i++) {
    
    let productCard = document.createElement('li');
    productCard.className = 'product';
    
    let productImg = document.createElement('img');
    if(products[i].image == undefined){
        productImg.setAttribute('src', './img/products/no-img.svg');
        productImg.setAttribute('alt', `Foto de ${products[i].title} está indisponível`);
        productImg.setAttribute('class', 'product-img');
    } else {
        productImg.setAttribute('src', products[i].image);
        productImg.setAttribute('alt', `Foto de ${products[i].title}`);
        productImg.setAttribute('class', 'product-img');
    }
    productCard.appendChild(productImg);
    
    let productMain = document.createElement('main');
    productMain.setAttribute('class', 'product-main');
    productCard.appendChild(productMain);

    let productTitle = document.createElement('h1');
    productTitle.setAttribute('class', 'product-title');
    productTitle.innerText = products[i].title;
    productMain.appendChild(productTitle);

    let productCategory = document.createElement('h5');
    productCategory.setAttribute('class', 'product-category');
    productCategory.innerText = products[i].category;
    productMain.appendChild(productCategory);

    let productPrice = document.createElement('strong');
    productPrice.setAttribute('class', 'product-price');
    productPrice.innerText = `R$${products[i].price}`;
    productMain.appendChild(productPrice)

    if(products[i].category === 'Frutas'){
        fruitList.appendChild(productCard)
    } else if (products[i].category === 'Bebidas'){
        drinkList.appendChild(productCard)
    } else if (products[i].category === 'Higiene'){
        hygieneList.appendChild(productCard)
    }
}
