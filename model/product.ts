export interface Product {
  sku: number;
  name: string;
  details: string;
  imageUrl: string;
  currency: string;
  price: number;
  salePrice?: number;
  type: string;
}
