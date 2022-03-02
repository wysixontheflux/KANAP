let url = new URL(window.location.href);
let id_produit = url.searchParams.get('id');

let Apiurl = `http://localhost:3000/api/products/${id_produit}`;
fetch(Apiurl)
    .then((item) => item.json())
    .then((item) => {
        document.querySelector('.item__img').innerHTML += ` <img src="${item['imageUrl']}" alt="Photo du canapÃ©"></img>`;
        document.querySelector('#price').innerHTML += item.price;
        document.querySelector('#title').innerHTML += item.name;
        document.querySelector('#description').innerHTML += item.description;
        for (i = 0; i < item.colors.length; i++) {
            document.querySelector('#colors').innerHTML += '<option>' + item.colors[i] + '</option>';
        }
    });

document.getElementById('addToCart').addEventListener('click', addToCart);

function addToCart(){
    let ProductLocal = JSON.parse(localStorage.getItem("produit"));
    let ProductColors = document.getElementById("colors");
    let ProductQuantity = document.getElementById("quantity");
    let ProduitToAdd = [ProductLocal, ProductQuantity, ProductColors];
    let Cart = ;
    
    if (ProductLocal == null) {
        ProductLocal = [];

    }
        ProductLocal.push(id_produit);
        localStorage.setItem("produit", JSON.stringify(ProductLocal));
        console.log(ProductColors.value);
        localStorage.setItem("colors", JSON.stringify(ProductColors));
        console.log(ProductQuantity.value);
        localStorage.setItem("quantity", JSON.stringify(ProductQuantity));

}

