// Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.
// Add a function calculateTax() that accepts a Product object and returns the price including tax.
// Implement the Main Program:



import { Product } from "../models/product";

export function taxCalculator(product: Product): number {
  return product.getPriceWithTax();
}



