"use strict";
// Create the PhysicalProduct Subclass:
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
// Add a weight property (number) for physical products.
// Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
const product_1 = require("../models/product");
class PhysicalProduct extends product_1.Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    getPriceWithTax() {
        return this.getRawPrice * 1.1;
    }
    applyDiscount(percent) {
        const discounted = this.getRawPrice * (1 - percent / 100);
        this.updatePrice = discounted;
    }
    applyBulkDiscount() {
        if (this.weight > 10) {
            this.applyDiscount(15); // 15% off for heavy items
        }
    }
}
exports.PhysicalProduct = PhysicalProduct;
