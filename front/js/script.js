fetch("http://localhost:3000/api/products")
    .then((reponse) => reponse.json())
    .then((reponse) => {

        for(produit of reponse) {
            console.log(produit);
        
            let id = produit['_id'];
            let img = produit['imageUrl'];
            let name = produit['name'];
            let alt = produit['altTxt'];
            let description = produit['description'];
            let emplacement = document.getElementById("items");
            emplacement.innerHTML += 
             `<a href="./product.html?id=${id}">
                <article>
                  <img src="${img}" alt="${alt}">
                  <h3 class="productName">${name}</h3>
                  <p class="productDescription">${description}</p>
                </article>
              </a>`
        }
    });
