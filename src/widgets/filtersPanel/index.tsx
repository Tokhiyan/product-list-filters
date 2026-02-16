import { useEffect, useState } from 'react';
import { useDebounce } from '@/shared/hooks/useDebounce.ts';
import { useFilters } from '@/entities/product/model/useFilters.ts';

import { Dropdown } from '@/shared/ui/dorpDown';
import { InputField } from '@/shared/ui/inputField';
import { StarRatingFilter } from '@/shared/ui/starRatingFilter';

import type { ProductFilters } from '@/entities/product/type/types';

import styles from './styles.module.scss';

type Props = {
  filters: ProductFilters;
  onFiltersChange: (updatedFilters: ProductFilters) => void;
};

type LocalPriceState = {
  minPrice?: number | string;
  maxPrice?: number | string;
};

export default function FiltersPanel({ filters, onFiltersChange }: Props) {
  const { data } = useFilters();

  const categories = data?.categories ?? [];
  const brands = data?.brands ?? [];

  const [localPrice, setLocalPrice] = useState<LocalPriceState>({
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
  });

  const debouncedPrice = useDebounce(localPrice, 900);

  useEffect(() => {
    const nextMinPrice =
      debouncedPrice.minPrice !== undefined
        ? Number(debouncedPrice.minPrice)
        : undefined;

    const nextMaxPrice =
      debouncedPrice.maxPrice !== undefined
        ? Number(debouncedPrice.maxPrice)
        : undefined;

    if (
      nextMinPrice === filters.minPrice &&
      nextMaxPrice === filters.maxPrice
    ) {
      return;
    }

    onFiltersChange({
      ...filters,
      minPrice: nextMinPrice,
      maxPrice: nextMaxPrice,
    });
  }, [debouncedPrice, filters, onFiltersChange]);

  const formatOptions = (items: string[], allLabel: string) => [
    { value: '', label: allLabel },
    ...items.map((item) => ({ value: item, label: item })),
  ];

  return (
    <div className={styles.filtersPanel}>
      <div className={styles.dropdownsContent}>
        <Dropdown
          value={filters.category ?? ''}
          onChange={(val) =>
            onFiltersChange({ ...filters, category: val || undefined })
          }
          options={formatOptions(categories, 'All Categories')}
        />

        <Dropdown
          value={filters.brand ?? ''}
          onChange={(val) =>
            onFiltersChange({ ...filters, brand: val || undefined })
          }
          options={formatOptions(brands, 'All Brands')}
        />
      </div>
      <StarRatingFilter
        value={filters.minRating ?? 0}
        onChange={(rating) =>
          onFiltersChange({ ...filters, minRating: rating })
        }
      />

      <div className={styles.priceRange}>
        <InputField
          label="Min Price"
          type="number"
          value={localPrice.minPrice ? Number(localPrice.minPrice) : 0}
          onChange={(val) =>
            setLocalPrice((prev) => ({
              ...prev,
              minPrice: val === 0 ? undefined : val,
            }))
          }
        />

        <InputField
          label="Max Price"
          type="number"
          value={localPrice.maxPrice ? Number(localPrice.maxPrice) : 0}
          onChange={(val) =>
            setLocalPrice((prev) => ({
              ...prev,
              maxPrice: val === 0 ? undefined : val,
            }))
          }
        />
      </div>
    </div>
  );
}
