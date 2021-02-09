import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="bg-gray-50 dark:bg-gray-900">
        <main className="min-h-screen w-9/10 mx-auto py-8 md:py-12">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
