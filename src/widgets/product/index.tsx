import type { Product } from '@/entities/product/type/types.ts';
import styles from './styles.module.scss';

const renderStars = (rating: number) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <span key={i} className={styles.star}>
          ★
        </span>
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <span key={i} className={styles.half}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className={`${styles.star} ${styles.empty}`}>
          ★
        </span>
      );
    }
  }

  return stars;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className={styles.productCard}>
      <img src={product.imageUrl} alt={product.name} />

      <div className={styles.productBody}>
        <div className={styles.leftSide}>
          <div className={styles.metaInfo}>
            <span>{product.category}</span>
            <span>{product.brand}</span>
          </div>

          <h3 className={styles.title}>{product.name}</h3>

          <div className={styles.ratingWrapper}>
            <div className={styles.stars}>{renderStars(product.rating)}</div>
            <span className={styles.ratingNumber}>({product.rating})</span>
          </div>
        </div>

        <span className={styles.priceTag}>${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
