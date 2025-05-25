// Create the PhysicalProduct Subclass:

// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
// Add a weight property (number) for physical products.
// Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).

import { Product } from "../models/product";
import { DiscountableProduct } from "./DiscountableProduct";

export class PhysicalProduct extends Product implements DiscountableProduct {
  private weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  override getPriceWithTax(): number {
    return this.getRawPrice * 1.1;
  }

  applyDiscount(percent: number): void {
    const discounted = this.getRawPrice * (1 - percent / 100);
    this.updatePrice = discounted;
  }

  applyBulkDiscount(): void {
    if (this.weight > 10) {
      this.applyDiscount(15); // 15% off for heavy items
    }
  }
}



