import Product from '@/widgets/product';

import type { Product as ProductType } from '@/entities/product/type/types.ts';
import styles from './styles.module.scss';

type Props = {
  products: ProductType[];
  loading: boolean;
};

export default function ProductList({ products, loading }: Props) {
  if (loading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.skeleton} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return <div className={styles.empty}>No products found</div>;
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
