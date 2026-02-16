import { API_URL } from '@/shared/constants/app.ts';
import type { FetchResponse, ProductFilters } from '../type/types';

export const fetchProducts = async (
  params: ProductFilters
): Promise<FetchResponse> => {
  const query = new URLSearchParams(
    Object.entries(params).reduce(
      (acc, [k, v]) => {
        if (v !== undefined) acc[k] = String(v);
        return acc;
      },
      {} as Record<string, string>
    )
  ).toString();

  const res = await fetch(`${API_URL}/products?${query}`);
  if (!res.ok) throw new Error('Failed to fetch products');

  return await res.json();
};
