import { API_URL } from '@/shared/constants/app';
import type { FiltersResponse } from '@/entities/product/type/types.ts';

export const fetchFilters = async (): Promise<FiltersResponse> => {
  const response = await fetch(`${API_URL}/filters`);

  if (!response.ok) {
    throw new Error('Failed to fetch filters');
  }

  return response.json();
};
