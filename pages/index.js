import Head from "next/head";

import Layout from "components/layout";
import Prose from "components/prose";
import ThemeToggleButton from "components/theme-toggle-button";

export default function Index() {
  return (
    <Layout noHeader>
      <Head>
        <title>Berk Özbalcı</title>
      </Head>
      <div className="p-8 md:p-24 lg:p-36 xl:p-48 2xl:p-64">
        <div className="text-2xl sm:text-3xl md:text-4xl dark:text-white">
          Hi! I'm{" "}
          <span className="font-black tracing-tight leading-none">
            Berk Özbalcı
          </span>
          , a full-stack developer and amateur musician.
        </div>
      </div>
    </Layout>
  );
}
