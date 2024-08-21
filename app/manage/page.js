"use server";

import Link from "next/link";
import classes from "../styles/Manage.module.css";
import { getSession } from "../../lib/getSession";
import { redirect } from "next/navigation";

export default async function Manage() {
  const { user } = await getSession();
  if (!user) redirect("/");

  return (
    <main className={classes.manage}>
      <h1>Manage page</h1>
      <div>
        <Link href="/manage/applications">
          <button
            whileHover={{
              background: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            List of Applications
          </button>
        </Link>
        <Link href="/manage/register">
          <button
            whileHover={{
              background: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Register user
          </button>
        </Link>
        <Link href="/manage/applications">
          <button
            whileHover={{
              background: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Update media
          </button>
        </Link>
      </div>
    </main>
  );
}
