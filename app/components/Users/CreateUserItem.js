import { useState } from "react";
import classes from "@/styles/CreateUserItem.module.css";
import Link from "next/link";

async function deleteUserHandler(id, setUsers) {
  const response = await fetch("/api/delete-user", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (response.ok) {
    setUsers((values) => values.filter((item) => item.id !== id));
  } else {
    console.error("Failed to delete user");
  }
}

export default function CreateUserItem(props) {
  const [users, setUsers] = useState([]);

  return (
    <li className={classes.applicationlist}>
      <div className={classes.details}>
        <div className={classes.detailsarea}>
          <h1 className={classes.name}>{props.username}</h1>
        </div>

        <div className={classes.detailsarea}>
          <p className={classes.input}>ID: {props.id}</p>
        </div>

        <div className={classes.buttons}>
          <Link href="/manage/users">
            <button
              onClick={() => deleteUserHandler(props.id, setUsers)}
              className={classes.delete}
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
}

//accept = copy discordID
