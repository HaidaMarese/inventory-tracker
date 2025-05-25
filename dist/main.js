"use strict";
// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
// Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
// Hint: Utilize polymorphism to your advantage here.
// Compile and Run the Program:
// Compile the TypeScript code:
// npx tsc
// Run the compiled JavaScript:
// node dist/main.js
// Challenge
// Add a DiscountableProduct interface that includes a method applyDiscount(). Implement this interface in one of the product classes.
// Implement a module to handle sorting products by price or by name.
// Add a new feature to the inventory system: bulk discounts for physical products over a certain quantity or size.
// Critical Thinking
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
const sortProducts_1 = require("./utils/sortProducts");
const inventory = [
    new PhysicalProduct_1.PhysicalProduct("0619", "Laptop", 600, 3),
    new DigitalProduct_1.DigitalProduct("2467", "Microsoft License", 67, 4),
    new PhysicalProduct_1.PhysicalProduct("0071", "Washer", 850, 12), // triggers bulk discount
    new PhysicalProduct_1.PhysicalProduct("0111", "Keyboard", 50, 1),
];
console.log("\n🎯 BEFORE DISCOUNTS:");
for (const item of inventory) {
    console.log(item.displayDetails());
    console.log(`Total cost with tax: $${(0, taxCalculator_1.taxCalculator)(item).toFixed(2)}\n`);
}
// Apply 10% discount to all PhysicalProducts, and bulk discount if heavy
for (const item of inventory) {
    if (item instanceof PhysicalProduct_1.PhysicalProduct) {
        item.applyDiscount(10);
        item.applyBulkDiscount(); // stacked discount if applicable
    }
}
console.log("\n AFTER DISCOUNTS:");
for (const item of inventory) {
    console.log(item.displayDetails());
    console.log(`Total cost with tax: $${(0, taxCalculator_1.taxCalculator)(item).toFixed(2)}\n`);
}
// Sort and display
console.log("\n SORTED BY PRICE:");
const byPrice = (0, sortProducts_1.sortProducts)(inventory, "price");
byPrice.forEach(p => console.log(`${p.name}: $${p.getPriceWithTax().toFixed(2)}`));
console.log("\n SORTED BY NAME:");
const byName = (0, sortProducts_1.sortProducts)(inventory, "name");
byName.forEach(p => console.log(`${p.name}: $${p.getPriceWithTax().toFixed(2)}`));
