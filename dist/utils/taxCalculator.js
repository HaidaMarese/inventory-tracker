"use strict";
// Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.
// Add a function calculateTax() that accepts a Product object and returns the price including tax.
// Implement the Main Program:
Object.defineProperty(exports, "__esModule", { value: true });
exports.taxCalculator = taxCalculator;
function taxCalculator(product) {
    return product.getPriceWithTax();
}
