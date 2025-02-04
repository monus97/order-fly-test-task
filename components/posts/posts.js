import style from "@/components/users/post-grid.module.css";
import PostItem from "./postsItems";
const PostsGrid = ({ posts }) => {
  return (
    <ul className={style.meals}>
      {posts?.map((post) => (
        <li key={post.id}>{<PostItem {...post} />}</li>
      ))}
    </ul>
  );
};

export default PostsGrid;
