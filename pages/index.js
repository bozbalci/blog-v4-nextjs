import ContentLayout from "components/content-layout";

import Time from "components/time";

export default function Index() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>Index Page</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <div>This is the index.</div>
      </ContentLayout.Main>
    </ContentLayout>
  );
}
