import ContentLayout from "components/content-layout";
import Prose from "components/prose";

import IndexMDX from "content/pages/index.mdx";

export default function Index() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>Berk Özbalcı</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <Prose fullWidth>
          <p>Book a 30-minute meeting with me</p>
        </Prose>
      </ContentLayout.Main>
    </ContentLayout>
  );
}
