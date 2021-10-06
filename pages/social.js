import ContentLayout from "components/content-layout";
import Prose from "components/prose";

import SocialMDX from "content/pages/social.mdx";

export default function Social() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>Elsewhere — Berk Özbalcı</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <Prose fullWidth>
          <SocialMDX />
        </Prose>
      </ContentLayout.Main>
    </ContentLayout>
  );
}
