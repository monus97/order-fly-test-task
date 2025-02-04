"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "@/components/navlinks/navlink.module.css";

const Navlinks = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${
        path.startsWith(href) ? `${style.active} ${style.link}` : style.link
      }`}
    >
      {children}
    </Link>
  );
};
export default Navlinks;
