import Breakpoint from "./breakpoint";
import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";

export default function Layout({ children, ...props }) {
  return (
    <>
      <Meta />
      {!props.noHeader ? <Header /> : null}
      <Breakpoint />
      <div className="min-h-footer bg-gray-50 dark:bg-gray-900">
        <main className="w-9/10 mx-auto py-8">{children}</main>
      </div>
      <Footer />
    </>
  );
}
