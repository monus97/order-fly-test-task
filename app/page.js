import styles from "@/app/page.module.css";
import { Suspense } from "react";
import loadingstyles from "@/app/loading.module.css";
import style from "@/app/users.module.css";
import { getUsers } from "@/lib/api";
import UsersGrid from "@/components/users/users-grid";
const GetUsers = async () => {
  try {
    const users = await getUsers();
    return <UsersGrid meals={users} />;
  } catch (error) {
    console.log(error, "error");
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
