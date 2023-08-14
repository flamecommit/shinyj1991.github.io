import { getPosts } from "@/services/post";

async function RootPage() {
  const posts = await getPosts();

  return (
    <>
      {posts.length &&
        posts.map((post) => {
          return <div key={post.slug}>{post.title}</div>;
        })}
    </>
  );
}

export default RootPage;
