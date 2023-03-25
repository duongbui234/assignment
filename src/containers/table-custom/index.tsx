import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import data from "@/data.json";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { getUsers } from "@/stores/slice/userActions";
import Image from "next/image";
import { UserType } from "@/types";
import _ from "lodash";
import PaginationComponent from "@/common/components/pagination";
import Table from "./components/table";

function TableCustom() {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getUsers(1));
  }, [currentPage, dispatch]);

  return (
    <div className={clsx(styles.customTable, "py-20 w-3/4 m-auto")}>
      <Table />
      <PaginationComponent
        className='!flex !justify-end !mt-8'
        currentPage={currentPage}
        limit={10}
        total={100}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default TableCustom;
