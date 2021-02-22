import ContentLayout from "components/content-layout";

import SocialMDX from "content/pages/social.mdx";

export default function About() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>Social Links - unsystem</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <div className="prose dark:prose-light">
          <SocialMDX />
        </div>
      </ContentLayout.Main>
    </ContentLayout>
  );
}
