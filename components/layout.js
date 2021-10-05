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
      <div className="bg-gray-50 dark:bg-gray-900">{children}</div>
      <Footer />
    </>
  );
}
