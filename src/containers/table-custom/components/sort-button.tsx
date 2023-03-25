import { UserType } from "@/types";
import clsx from "clsx";
import { MouseEventHandler } from "react";
import styles from "../styles.module.scss";

type SortKeys = keyof Omit<UserType, "key"> | "";
type SortType = "ascn" | "desc";

function SortButton({
  sortType,
  columnKey,
  sortKey,
  onClick,
}: {
  sortType: SortType;
  columnKey: SortKeys;
  sortKey: SortKeys;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.sortButton,
        sortKey === columnKey && sortType === "desc" && styles.sortReverse
      )}
    >
      ▲
    </button>
  );
}

export default SortButton;
