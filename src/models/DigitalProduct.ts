// Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
// Add a fileSize property (number) for digital products.
// Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
// Use a getter method to return the formatted file size in megabytes.



import { Product } from "../models/product";

// DigitalProduct class that extends Product
export class DigitalProduct extends Product {
  private fileSize: number;

  // a fileSize property (number) for digital products
  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  // a getter method to return the formatted file size in megabytes
  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }

  //  calculate a final price with no tax
  override getPriceWithTax(): number {
    return this.price; // No require tax
  }
}




