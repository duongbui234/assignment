import TableAntd from "@/containers/table-antd";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Table Using Antd</title>
      </Head>

      <TableAntd />
    </>
  );
}

// Page.getLayout = (page: React.ReactElement) => {
//   return <AppLayout fullWidth>{page}</AppLayout>;
// };
