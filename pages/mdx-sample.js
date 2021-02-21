import ContentLayout from "components/content-layout";

import MDXSample, { Side, frontMatter } from "components/mdx-sample.mdx";
import Time from "components/time";

export default function Index() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>MDX Sample</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <div className="prose dark:prose-light prose-md xl:prose-lg max-w-none">
          <h1>{frontMatter.title}</h1>
          <MDXSample />
        </div>
      </ContentLayout.Main>
      <ContentLayout.Side>
        <Side />
        <p className="uppercase font-semibold tracking-wide prose dark:prose-light">
          <Time datetime={frontMatter.publishedAt} />
        </p>
      </ContentLayout.Side>
    </ContentLayout>
  );
}
