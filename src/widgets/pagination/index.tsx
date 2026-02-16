import styles from './styles.module.scss';

type Props = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
};

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: Props) {
  const totalPages =
    itemsPerPage > 0 ? Math.ceil(totalItems / itemsPerPage) : 0;

  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          disabled={pageNumber === currentPage}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? styles.active : ''}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
