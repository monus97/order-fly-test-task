import Link from "next/link";
import Image from "next/image";
import logoimg from "@/assets/logo.svg";
import styles from "@/components/main-header/main-header.module.css";
import Navlinks from "../navlinks/navlinks";
const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={"/"}>
        <Image src={logoimg} alt="logo" />
        Users And His Posts
      </Link>
      <nav className={styles.nav}>
        <Navlinks href="/">Users</Navlinks>
      </nav>
    </header>
  );
};

export default MainHeader;
