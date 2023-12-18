import { listProductsAdded, product, amount, buttonRemoveItem, buttonAddItem } from "../variables/variables.js";
import { listProductsInCart } from "../helpers/listProductsInCart.js";
import { listProductsStock } from "../mock/listProductsStock.js";

// Function responsible for registering items/products in the cart
export function addProductsInCart() {
    for (let counter = 0; counter <= 5; counter++) {
        listProductsAdded.push({
            idProduct: counter + 1,
            titleProduct: product.value,
            priceProduct: (({ price }) => price)(listProductsStock.find(listProductsStock => listProductsStock.title === product.value)),
            amountProduct: parseInt(amount.value),
        });

        listProductsInCart();
        amount.value = "";
        buttonRemoveItem.removeAttribute("disabled");
        buttonAddItem.setAttribute("disabled", true);
        return listProductsAdded;
    }
}