import { getPostById } from "@/lib/api";
import style from "@/app/users.module.css";
import { Suspense } from "react";
import styles from "@/app/loading.module.css";
import PostsGrid from "@/components/posts/posts";
const GetPosts = async ({ params }) => {
  try {
    const postsById = await getPostById(params);
    return <PostsGrid posts={postsById} />;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <p className={styles.loading}>Failed to load posts.</p>;
  }
};
const Posts = async ({ params, searchParams }) => {
  const { posts } = params;
  const { name } = searchParams;
  return (
    <>
      <header className={style.header}>
        <h1>
          All Posts Created{" "}
          <span className={style.highlight}>by You Mr.{name}</span>
        </h1>
      </header>
      <main className={style.main}>
        <Suspense fallback={<p className={styles.loading}>Loading...</p>}>
          <GetPosts params={posts} />
        </Suspense>
      </main>
    </>
  );
};

export default Posts;
