import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { getUsers } from "@/stores/slice/userActions";
import { UserType } from "@/types";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { Pagination, PaginationProps, Table } from "antd";
import Image from "next/image";

const columns: ColumnsType<UserType> = [
  {
    title: "Fullname",
    key: "fullname",
    dataIndex: "fullname",
    width: "30%",
    sorter: (a, b) => a.fullname.localeCompare(b.fullname),
  },
  {
    title: "Username",
    key: "username",
    dataIndex: "username",
    width: "30%",
    sorter: (a, b) => a.username.localeCompare(b.username),
  },
  {
    title: "Thumbnail icon",
    key: "thumbnail",
    dataIndex: "thumbnail",
    width: "10%",
    render(value) {
      return (
        <Image
          src={value}
          alt='thumbnail-icon'
          width={50}
          height={50}
          className='!rounded-full'
        />
      );
    },
  },
];

const TableAntd = () => {
  const dispatch = useAppDispatch();
  const { isLoading, users } = useAppSelector((state) => state.users);

  const [currentPage, setCurrentPage] = useState(1);

  const onChange: PaginationProps["onChange"] = (pageNumber, pageSize) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getUsers(currentPage));
  }, [currentPage, dispatch]);

  return (
    <div className='py-20 w-3/4 m-auto'>
      <Table
        dataSource={users}
        columns={columns}
        loading={isLoading}
        pagination={false}
      />

      <Pagination
        className='!mt-8 !flex !justify-end'
        current={currentPage}
        total={100}
        pageSize={10}
        onChange={onChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default TableAntd;
