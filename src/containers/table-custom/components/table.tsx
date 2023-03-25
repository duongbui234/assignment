import React, { useCallback, useState } from "react";
import { Spin } from "antd";
import { UserType } from "@/types";
import SortButton from "./sort-button";
import _ from "lodash";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import Image from "next/image";

type SortKeys = keyof Omit<UserType, "key"> | "";
type SortType = "ascn" | "desc";

function sortData({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: UserType[];
  sortKey: SortKeys;
  reverse: boolean;
}) {
  if (sortKey === "") return tableData;

  const sortedData = tableData.sort((a, b) => {
    return a[sortKey].localeCompare(b[sortKey]);
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}

const Table = () => {
  const [sortKey, setSortKey] = useState<SortKeys>("");
  const [sortType, setSortType] = useState<SortType>("ascn");
  const { isLoading, users } = useAppSelector((state) => state.users);

  let userClone = _.cloneDeep(users);

  const headers: { key: SortKeys; label: string }[] = [
    { key: "fullname", label: "Fullname" },
    { key: "username", label: "Username" },
    { key: "thumbnail", label: "Thumbnail icon" },
  ];

  function changeSort(key: SortKeys) {
    setSortType(sortType === "ascn" ? "desc" : "ascn");
    setSortKey(key);
  }

  const sortedData = useCallback(
    () =>
      sortData({
        tableData: userClone,
        sortKey,
        reverse: sortType === "desc",
      }),
    [sortKey, sortType, userClone]
  );

  return (
    <table>
      <thead>
        <tr>
          {headers.map((row) => {
            return (
              <td key={row.key}>
                {row.label}
                {row.key !== "thumbnail" && (
                  <SortButton
                    columnKey={row.key}
                    onClick={() => changeSort(row.key)}
                    {...{
                      sortType,
                      sortKey,
                    }}
                  />
                )}
              </td>
            );
          })}
        </tr>
      </thead>

      <tbody className='relative'>
        {isLoading && (
          <>
            <div className='absolute w-full h-full bg-[#aaa] opacity-20' />
            <Spin className='!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2' />
          </>
        )}
        {sortedData().map((user) => {
          return (
            <tr key={user?.key}>
              <td>{user?.fullname}</td>
              <td>{user?.username}</td>
              <td>
                <Image
                  src={user?.thumbnail}
                  alt='thumbnail-icon'
                  width={50}
                  height={50}
                  className='rounded-full'
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
