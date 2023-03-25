import styles from "./styles.module.scss";
import clsx from "clsx";
import PaginationItem from "./pagination-item";

const range = (start: number, end: number) => {
  return Array.from({ length: end }, (_, i) => i + start);
};

type PaginationType = {
  className?: string;
  total: number;
  limit: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const PaginationComponent = ({
  currentPage,
  total,
  limit,
  onPageChange,
  className,
}: PaginationType) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  return (
    <ul className={clsx(styles.paginationCustom, className)}>
      {pages.map((page) => (
        <PaginationItem
          page={page}
          key={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      ))}
    </ul>
  );
};
export default PaginationComponent;
