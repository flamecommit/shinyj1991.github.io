import PostList from "@/components/post/List";
import { getPosts } from "@/services/post";

async function RootPage() {
  const posts = await getPosts();

  return (
    <>
      <PostList postList={posts} />
    </>
  );
}

export default RootPage;
