import ContentLayout from "components/content-layout";

import MDXSample, { Side, frontMatter } from "content/pages/mdx-sample.mdx";
import Time from "components/time";
import Prose from "components/prose";

export default function MDXPage() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>MDX Sample — Berk Özbalcı</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <Prose fullWidth>
          <h1>{frontMatter.title}</h1>
          <MDXSample />
        </Prose>
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
