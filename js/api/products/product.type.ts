export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[]; // Assuming an array of image URLs
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  count: number;
}
