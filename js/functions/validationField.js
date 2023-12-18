import { amount, buttonAddItem, buttonRemoveItem, product } from "../variables/variables.js";

export function validationField() {
    let checkField = amount.value && product.value;

    if (checkField === "" || amount.value <= 0) {
        buttonAddItem.setAttribute("disabled", true);
        buttonRemoveItem.setAttribute("disabled", true);
    } else {
        buttonAddItem.removeAttribute("disabled");
    }

    if (amount.value <= 0) {
        buttonAddItem.setAttribute("disabled", true);
    }
}

amount.addEventListener("input", validationField);