import ContentLayout from "components/content-layout";

export default function Index() {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>About Page</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <div className="prose dark:prose-light">
          <h1>this is content</h1>
          <p>yeah</p>
        </div>
        <div className="bg-secondary-500 h-16"></div>
      </ContentLayout.Main>
      <ContentLayout.Side>hello</ContentLayout.Side>
    </ContentLayout>
  );
}
