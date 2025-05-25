"use strict";
// Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
// Add a fileSize property (number) for digital products.
// Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
// Use a getter method to return the formatted file size in megabytes.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const product_1 = require("../models/product");
// DigitalProduct class that extends Product
class DigitalProduct extends product_1.Product {
    // a fileSize property (number) for digital products
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    // a getter method to return the formatted file size in megabytes
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
    //  calculate a final price with no tax
    getPriceWithTax() {
        return this.price; // No require tax
    }
}
exports.DigitalProduct = DigitalProduct;
