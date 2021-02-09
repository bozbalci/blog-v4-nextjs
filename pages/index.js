import Layout from "components/layout";
import Head from "next/head";

import MDXSample, { Side, frontMatter } from "components/mdx-sample.mdx";
import SideBox from "components/side-box";
import Time from "components/time";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Index Page</title>
        </Head>
        <div className="grid grid-cols-3 gap-6">
          <article className="col-span-3 lg:col-span-2">
            <div className="prose dark:prose-light prose-md xl:prose-lg max-w-none">
              <h1>{frontMatter.title}</h1>
              <MDXSample />
            </div>
          </article>
          <div className="col-span-3 md:col-span-2 py-6 lg:py-0 lg:col-span-1">
            <SideBox>
              <Side />
              <p className="uppercase font-semibold tracking-wide">
                <Time datetime={frontMatter.publishedAt} />
              </p>
            </SideBox>
          </div>
        </div>
      </Layout>
    </>
  );
}
