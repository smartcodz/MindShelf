export type Category =
  | "Christian Books"
  | "Leadership"
  | "Finance"
  | "Marriage"
  | "Self-Development";

export interface Product {
  id: number;
  name: string;
  price: number; // in naira
  category: Category;
  image: string;
  description: string;
  rating: number; // 1 to 5
  stock: number;
}

// What we send when creating a book: everything except the id,
// because the server creates the id for us.
export type CreateProductInput = Omit<Product, "id">;
