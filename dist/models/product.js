"use strict";
// Create the Product Base Class:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
// Inside src/models/Product.ts, create a Product base class with the following:
// Properties: sku (string), name (string), price (number).
// Methods:
// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.export class Product {
// Properties:
class Product {
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    // displayDetails() 
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }
    // getPriceWithTax()
    getPriceWithTax() {
        return this.price;
    }
    get getRawPrice() {
        return this.price;
    }
    set updatePrice(newPrice) {
        this.price = newPrice;
    }
}
exports.Product = Product;
