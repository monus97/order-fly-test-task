import styles from "@/app/page.module.css";
import { Suspense } from "react";
import loadingstyles from "@/app/loading.module.css";
import style from "@/app/users.module.css";
import { getUsers } from "@/lib/api";
import UsersGrid from "@/components/users/users-grid";
const GetUsers = async () => {
  try {
    const users = await getUsers();
    if (users !== undefined) {
      return <UsersGrid users={users} />;
    }
  } catch (error) {
    console.log(error, "error");
    return <p className={loadingstyles.loading}>Failed to load Users.</p>;
  }
};
export default function Home() {
  return (
    <>
      <main className={style.main}>
        <Suspense
          fallback={<p className={loadingstyles.loading}>Loading...</p>}
        >
          <GetUsers />
        </Suspense>
      </main>
    </>
  );
}
