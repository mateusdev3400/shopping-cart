import { listProductsStock  } from "../mock/listProductsStock.js";

export function functionDisplayListOfProductsInStock(listId) {
    let elementList = document.querySelector(`#${listId}`);
    let htmlList= "";

    listProductsStock.forEach(product => {
        htmlList += `
            <option value="${product.title}">
                ${product.title} - R$ ${product.price}
            </option>
        `
    });

    elementList.innerHTML = htmlList;
}