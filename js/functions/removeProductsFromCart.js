import { listProductsAdded, elementShowItens, elementShowItensTotal, buttonRemoveItem, buttonAddItem } from "../variables/variables.js";
import { validationField } from "./validationField.js";

// Function responsible for removing list of items in the cart (but in HTML)
export function removeProductsFromCart() {
    let htmlList = "";
    let htmlMensageCart = `Total: <span class="content__emphasis">R$ 0</span>`;

    if (listProductsAdded.length > 0) {
        listProductsAdded.length = [];

        htmlList += `
            <p class="content__text">
                Nenhum item foi adicionado ao carrinho de compras.
            </p>
        `;

        elementShowItens.innerHTML = htmlList;
        elementShowItensTotal.innerHTML = htmlMensageCart;
        validationField();
        buttonRemoveItem.setAttribute("disabled", true);
    }
}