import ContentLayout from "components/content-layout";
import Prose from "components/prose";

export default function NotFound() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>404 / bozbalci</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <Prose fullWidth>
          <h1>404</h1>
          <p>The page is not found.</p>
        </Prose>
      </ContentLayout.Main>
    </ContentLayout>
  );
}
