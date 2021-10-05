import Head from "next/head";

import Layout from "components/layout";
import Prose from "components/prose";
import ThemeToggleButton from "components/theme-toggle-button";

export default function Index() {
  return (
    <Layout noHeader>
      <Head>
        <title>unsystem</title>
      </Head>
      <div className="min-h-screen">
        <div className="grid">
          <div className="text-4xl p-8 dark:text-white">
            <span className="font-black tracing-tight leading-none">
              Berk Özbalcı
            </span>{" "}
            is a software engineer, Web enthusiast and musician.
          </div>
          <div className="bg-secondary-900 w-full h-96"></div>
        </div>
      </div>
    </Layout>
  );
}
