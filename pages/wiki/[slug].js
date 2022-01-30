import ContentLayout from "components/content-layout";
import Prose from "components/prose";
import { getAllWikiSlugs, WIKIS_PATH } from "lib/wiki";
import { MDXRemote } from "next-mdx-remote";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export default function WikiPage({ source, frontMatter }) {
  return (
    <ContentLayout>
      <ContentLayout.Head>
        <title>{frontMatter.title} - Berk Özbalcı</title>
      </ContentLayout.Head>
      <ContentLayout.Main>
        <Prose fullWidth>
          <MDXRemote {...source} />
        </Prose>
      </ContentLayout.Main>
    </ContentLayout>
  );
}

export async function getStaticProps({ params }) {
  const filePath = join(WIKIS_PATH, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath);

  const { content, data } = matter(fileContents);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllWikiSlugs()
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
