// Create the Product Base Class:

// Inside src/models/Product.ts, create a Product base class with the following:
// Properties: sku (string), name (string), price (number).
// Methods:
// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.export class Product {



// Properties:
export class Product {
  private sku: string;
  public name: string;
  protected price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  // displayDetails() 
  displayDetails(): string {
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
  }

  // getPriceWithTax()
  getPriceWithTax(): number {
    return this.price;
  }
  
   get getRawPrice(): number {
    return this.price;
  }

  set updatePrice(newPrice: number) {
    this.price = newPrice;
  }
}

