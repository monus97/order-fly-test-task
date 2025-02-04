import classes from "../users/post-item.module.css";
export default function PostItem({ id, userId, title, body }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>User ID : {userId}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{body}</p>
        <div className={classes.actions}>
          {/* <Link href={`/${id}`}>View Details</Link> */}
        </div>
      </div>
    </article>
  );
}
