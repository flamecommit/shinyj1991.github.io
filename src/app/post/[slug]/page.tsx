import { getPost, getPostList } from "@/services/post";
import PostViewer from "@/components/post/Viewer";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const postList = await getPostList();

  return postList.map((post) => ({
    slug: post.slug,
  }));
}

const PostViewPage = async ({ params }: Props) => {
  const { slug } = params;
  const { post } = await getPost(slug);

  return (
    <>
      <PostViewer postData={post} />
    </>
  );
};

export default PostViewPage;
