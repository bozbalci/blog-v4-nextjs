import React from "react";
import Head from "next/head";

import Layout from "./layout";
import SideBox from "./side-box";

export default function ContentLayout({ children, ...props }) {
  const headContent = React.Children.map(children, (child) =>
    child.type.displayName === "HeadContent" ? child : null
  );
  const mainContent = React.Children.map(children, (child) =>
    child.type.displayName === "MainContent" ? child : null
  );
  const sideContent = React.Children.map(children, (child) =>
    child.type.displayName === "SideContent" ? child : null
  );

  return (
    <Layout {...props}>
      {headContent || null}
      <div className="grid grid-cols-3 gap-6">
        <article className="col-span-3 lg:col-span-2">{mainContent}</article>
        {sideContent.length ? (
          <aside className="col-span-3 md:col-span-2 lg:col-span-1 py-6 lg:py-0">
            <SideBox>{sideContent}</SideBox>
          </aside>
        ) : null}
      </div>
    </Layout>
  );
}

export function HeadContent({ children }) {
  return <Head>{children}</Head>;
}

HeadContent.displayName = "HeadContent";
ContentLayout.Head = HeadContent;

export function MainContent({ children }) {
  return children;
}

MainContent.displayName = "MainContent";
ContentLayout.Main = MainContent;

export function SideContent({ children }) {
  return children;
}

SideContent.displayName = "SideContent";
ContentLayout.Side = SideContent;
