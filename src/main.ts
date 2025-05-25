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


import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { taxCalculator } from "./utils/taxCalculator";
import { sortProducts } from "./utils/sortProducts";

const inventory = [
  new PhysicalProduct("0619", "Laptop", 600, 3),
  new DigitalProduct("2467", "Microsoft License", 67, 4),
  new PhysicalProduct("0071", "Mouse", 850, 12), 
  new PhysicalProduct("0111", "Desk Chair", 50, 1),
];

console.log("\n BEFORE DISCOUNTS:");
for (const item of inventory) {
  console.log(item.displayDetails());
  console.log(`Total cost with tax: $${taxCalculator(item).toFixed(2)}\n`);
}


for (const item of inventory) {
  if (item instanceof PhysicalProduct) {
    item.applyDiscount(10);
    item.applyBulkDiscount(); 
  }
}

console.log("\n AFTER DISCOUNTS:");
for (const item of inventory) {
  console.log(item.displayDetails());
  console.log(`Total cost with tax: $${taxCalculator(item).toFixed(2)}\n`);
}


console.log("\n SORTED BY PRICE:");
const byPrice = sortProducts(inventory, "price");
byPrice.forEach(p => console.log(`${p.name}: $${p.getPriceWithTax().toFixed(2)}`));

console.log("\n SORTED BY NAME:");
const byName = sortProducts(inventory, "name");
byName.forEach(p => console.log(`${p.name}: $${p.getPriceWithTax().toFixed(2)}`));

