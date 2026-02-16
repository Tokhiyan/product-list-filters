import { useSearchParams } from 'react-router-dom';

export const useProductFilters = () => {
  const [params, setParams] = useSearchParams();

  const filters = {
    page: Number(params.get('page') || 1),
    limit: Number(params.get('limit') || 8),
    category: params.get('category') || undefined,
    brand: params.get('brand') || undefined,
    minPrice: params.get('minPrice')
      ? Number(params.get('minPrice'))
      : undefined,
    maxPrice: params.get('maxPrice')
      ? Number(params.get('maxPrice'))
      : undefined,
    minRating: params.get('minRating')
      ? Number(params.get('minRating'))
      : undefined,
  };

  const update = (next: Partial<typeof filters>) => {
    const newParams = { ...filters, ...next };

    const cleanedParams: Record<string, string> = {};

    Object.entries(newParams).forEach(([key, value]) => {
      if (value !== undefined) {
        cleanedParams[key] = String(value);
      }
    });

    setParams(cleanedParams);
  };

  return { filters, update };
};
