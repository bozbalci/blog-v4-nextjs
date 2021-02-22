import Layout from "components/layout";
import Prose from "components/prose";

export default function NotFound() {
  return (
    <Layout>
      <div className="w-full flex items-center justify-center">
        <Prose centered fullWidth>
          <h1>404</h1>
          <p>The page is not found.</p>
        </Prose>
      </div>
    </Layout>
  );
}
