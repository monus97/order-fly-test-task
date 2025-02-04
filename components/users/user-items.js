import Link from "next/link";
import classes from "./post-item.module.css";
export default function MealItem({
  id,
  address,
  email,
  name,
  summary,
  company,
}) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.headerText}>
          <h2>{name}</h2>
          <p>company name : {company?.name}</p>
          <p>User ID : {id}</p>
          <p>Email : {email}</p>
          <p>
            Address :{" "}
            {`${address?.street}, ${address?.suite}, ${address?.city}, ${address?.zipcode}`}
          </p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/${id}?name=${encodeURIComponent(name)}`}>
            View Posts
          </Link>
        </div>
      </div>
    </article>
  );
}
