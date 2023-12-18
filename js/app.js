import { addProductsInCart } from "./functions/addProductsInCart.js";
import { removeProductsFromCart } from "./functions/removeProductsFromCart.js";
import { validationField } from "./functions/validationField.js";

import { functionDisplayListOfProductsInStock } from "./helpers/displayListOfProductsInStock.js";
import { displayValuesTotalProducts } from "./helpers/displayValuesTotalProducts.js";
import { listProductsInCart } from "./helpers/listProductsInCart.js";

functionDisplayListOfProductsInStock("stock-product-list");
displayValuesTotalProducts();
listProductsInCart();
validationField();

document.getElementById("button-add").onclick = addProductsInCart;
document.getElementById("button-remove").onclick = removeProductsFromCart;