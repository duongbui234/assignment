import clsx from "clsx";
import styles from "./styles.module.scss";

type PaginationItemType = {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const PaginationItem = ({
  page,
  currentPage,
  onPageChange,
}: PaginationItemType) => {
  return (
    <li
      className={clsx(styles.pageItem, page === currentPage && styles.active)}
      onClick={() => onPageChange(page)}
    >
      <span className={styles.pageLink}>{page}</span>
    </li>
  );
};

export default PaginationItem;
