export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  imageUrl?: string;
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type FetchResponse = {
  data: Product[];
  pagination: Pagination;
};

export type ProductFilters = {
  page: number;
  limit: number;
  category?: string;
  brand?: string;
  rating?: number;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
};

export type FiltersResponse = {
  categories: string[];
  brands: string[];
};
