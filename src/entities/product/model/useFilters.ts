import { useQuery } from '@tanstack/react-query';

import type { FiltersResponse } from '@/entities/product/type/types.ts';
import { fetchFilters } from '@/entities/product/api/fetchFilters.ts';

export const useFilters = () => {
  return useQuery<FiltersResponse, Error>({
    queryKey: ['filters'],
    queryFn: fetchFilters,
    staleTime: 1000 * 60 * 5,
  });
};
