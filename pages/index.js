import Head from "next/head";

import Layout from "components/layout";
import Prose from "components/prose";

export default function Index() {
  return (
    <Layout noHeader>
      <Head>
        <title>Index Page</title>
      </Head>
    </Layout>
  );
}
