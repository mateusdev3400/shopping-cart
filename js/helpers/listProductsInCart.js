import { listProductsAdded, elementShowItens } from "../variables/variables.js";
import { displayValuesTotalProducts } from "./displayValuesTotalProducts.js";

// Function responsible for showing a list of items in the cart (but in HTML)
export function listProductsInCart() {
    let htmlList = "";

    if (listProductsAdded.length == 0) {
        htmlList += `
            <p class="content__text">
                Nenhum item foi adicionado ao carrinho de compras.
            </p>
        `
    }

    listProductsAdded.forEach(product => {
        htmlList += `
            <p class="content__text">
                <span class="content__emphasis">${product.amountProduct}x</span>
                ${product.titleProduct} - <span class="content__emphasis">${product.priceProduct}</span> R$
            </p>
        `;
    });

    displayValuesTotalProducts();

    elementShowItens.innerHTML = htmlList;
}