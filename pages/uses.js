import ContentLayout from "components/content-layout";
import Prose from "components/prose";

import UsesMDX, { Side } from "content/pages/uses.mdx";

export default function Index() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>Uses — Berk Özbalcı</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <Prose fullWidth>
          <UsesMDX />
        </Prose>
      </ContentLayout.Main>
      <ContentLayout.Side>
        <Side />
      </ContentLayout.Side>
    </ContentLayout>
  );
}
