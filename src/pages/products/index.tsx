import { useCallback } from 'react';
import { useProductFilters } from '@/features/productFilter/model/useProductFilters.ts';
import { useProducts } from '@/entities/product/model/useProducts.ts';

import Pagination from '@/widgets/pagination';
import FiltersPanel from '@/widgets/filtersPanel';
import ProductList from '@/widgets/productList';

import type { ProductFilters } from '@/entities/product/type/types.ts';
import styles from './style.module.scss';

export default function ProductsPage() {
  const { filters, update } = useProductFilters();

  const { data, isLoading } = useProducts(filters);

  const handleFiltersChange = useCallback(
    (partialFilters: Partial<ProductFilters>) => {
      update({ ...partialFilters, page: 1 });
    },
    [update],
  );

  const handlePageChange = useCallback(
    (page: number) => {
      update({ page });
    },
    [update],
  );

  return (
    <div className={styles.products}>
      <FiltersPanel filters={filters} onFiltersChange={handleFiltersChange} />
      <ProductList products={data?.data || []} loading={isLoading} />
      <Pagination
        currentPage={filters.page}
        totalItems={data?.pagination?.total || 0}
        itemsPerPage={data?.pagination?.limit || 0}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
