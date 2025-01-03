import ContentLayout from "components/content-layout";
import Prose from "components/prose";

import AboutMDX from "content/pages/about.mdx";

export default function About() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>About — Berk Özbalcı</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <Prose fullWidth>
          <AboutMDX />
        </Prose>
      </ContentLayout.Main>
    </ContentLayout>
  );
}
