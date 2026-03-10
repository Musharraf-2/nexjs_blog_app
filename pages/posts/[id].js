import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/pages";

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br></br>
      {postData.id}
      <br></br>
      {postData.date}
      <br></br>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}
