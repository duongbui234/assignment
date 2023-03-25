import TableCustom from "@/containers/table-custom";
import Head from "next/head";
import data from "@/data.json";

export default function Page() {
  return (
    <>
      <Head>
        <title>Custom Table</title>
      </Head>
      <TableCustom />
    </>
  );
}

// Page.getLayout = (page: React.ReactElement) => {
//   return <AppLayout fullWidth>{page}</AppLayout>;
// };
