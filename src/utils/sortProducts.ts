import { Product } from "../models/product";

export function sortProducts(products: Product[], criteria: "price" | "name"): Product[] {
  if (criteria === "price") {
    return [...products].sort((a, b) => a.getPriceWithTax() - b.getPriceWithTax());
  } else {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
  }
}

