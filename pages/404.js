import ContentLayout from "components/content-layout";
import Prose from "components/prose";

export default function NotFound() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>404 / unsystem</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <div className="w-full flex items-center justify-center">
          <Prose centered fullWidth>
            <h1>404</h1>
            <p>The page is not found.</p>
          </Prose>
        </div>
      </ContentLayout.Main>
    </ContentLayout>
  );
}
