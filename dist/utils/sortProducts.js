"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortProducts = sortProducts;
function sortProducts(products, criteria) {
    if (criteria === "price") {
        return [...products].sort((a, b) => a.getPriceWithTax() - b.getPriceWithTax());
    }
    else {
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
    }
}
