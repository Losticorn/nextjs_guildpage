import Link from "next/link";
import classes from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <p>
        &copy;{new Date().getFullYear()} Dirty Zuk & The Boyz. All rights
        reserved.
        <Link href="/privacy"> Privacy Policy.</Link>
      </p>
    </div>
  );
}
