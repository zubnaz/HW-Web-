const path = "https://dummyjson.com/products";

let main_products = document.querySelector('div.main div.main-products');
let btn = document.querySelector('#sortBtn');
let products;
async function GetProdutcts() {
    let p = await fetch(path);

    products = await p.json();

    console.log(products.products);
    products.products.forEach(element => {
        main_products.innerHTML += `<div><div class="image"><img src="${element.images[0]}" /></div><div class="text">Brand : ${element.brand}<br> Category : ${element.category}<br> Price : ${element.price} UAH <br> Rating : ${element.rating} <br> Stock : ${element.stock}</div></div>`
    });


}

function SortByPrice() {
    products.products.sort((a, b) => a.price - b.price);
    main_products.innerHTML = "";
    products.products.forEach(element => {
        main_products.innerHTML += `<div><div class="image"><img src="${element.images[0]}" /></div><div class="text">Brand : ${element.brand}<br> Category : ${element.category}<br> Price : ${element.price} UAH <br> Rating : ${element.rating} <br> Stock : ${element.stock}</div></div>`
    });
}
btn.onclick = () => {
    SortByPrice();
}
GetProdutcts();