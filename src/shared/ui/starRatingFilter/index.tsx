import { useState } from 'react';

import styles from './style.module.scss';

interface StarRatingFilterProps {
  value?: number;
  maxStars?: number;
  onChange: (rating: number) => void;
}

export const StarRatingFilter = ({
  value = 0,
  maxStars = 5,
  onChange,
}: StarRatingFilterProps) => {
  const [hover, setHover] = useState(0);

  return (
    <div className={styles.starFilter}>
      {Array.from({ length: maxStars }, (_, i) => {
        const starIndex = i + 1;

        const isFilled = starIndex <= (hover || value);

        return (
          <span
            key={i}
            className={`${styles.star} ${isFilled ? styles.filled : ''}`}
            onMouseEnter={() => setHover(starIndex)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onChange(starIndex)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};
