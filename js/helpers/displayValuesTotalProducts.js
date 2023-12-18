import { listProductsAdded, elementShowItensTotal, elementShowItens } from "../variables/variables.js";

// Function that executes the sum of values placed in the cart by the user
export function displayValuesTotalProducts() {
    let htmlList = "";
    let total = 0;

    if (listProductsAdded.length > 0) {
        listProductsAdded.reduce((acc, product) => {
            // Check if the product object and priceProduct property exist
            if (product && product.priceProduct != undefined) {
                total = acc + (product.priceProduct * product.amountProduct);
                return total;
            } else {
                return acc;
            }
        }, 0);
    }

    htmlList += `
        Total: <span class="content__emphasis">R$ ${total}</span>
    `;

    elementShowItensTotal.innerHTML = htmlList;
}