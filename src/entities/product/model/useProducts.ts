import { useQuery } from '@tanstack/react-query';

import type { FetchResponse, ProductFilters } from '../type/types';
import { fetchProducts } from '@/entities/product/api/fetchProducts.ts';

export const useProducts = (params: ProductFilters) => {
  return useQuery<FetchResponse, Error>({
    queryKey: ['products', params],
    queryFn: () => fetchProducts(params),
    placeholderData: (previousData) => previousData,
  });
};
