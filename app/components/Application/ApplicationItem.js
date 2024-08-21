"use client";

import { useState } from "react";
import classes from "../../styles/ApplicationItem.module.css";
import Link from "next/link";

async function deleteApplicationHandler(id, setUsers) {
  const response = await fetch("/api/delete-application", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (response.ok) {
    setUsers((values) => values.filter((item) => item.id !== id));
  } else {
    console.error("Failed to delete application");
  }
}

export default function ApplicationItem(props) {
  const [isCopied, setIsCopied] = useState(false);
  const [users, setUsers] = useState([]);

  function copyDiscord() {
    navigator.clipboard.writeText(props.discord);
    setIsCopied(true);
  }

  setTimeout(() => {
    setIsCopied(false);
  }, 1500);

  return (
    <li className={classes.applicationlist}>
      <div className={classes.details}>
        <div className={classes.detailsarea}>
          <h1 className={classes.name}>{props.name}</h1>
        </div>
        <div className={classes.detailsarea}>
          <p className={classes.label}>Discord</p>
          <p className={classes.input}>{props.discord}</p>
        </div>
        <div className={classes.detailsarea}>
          <p className={classes.label}>Interest</p>
          <p className={classes.input}>{props.raidtype}</p>
        </div>
        <div className={classes.detailsarea}>
          <p className={classes.label}>Role</p>
          <p className={classes.input}>{props.role}</p>
        </div>
        <div className={classes.detailsarea}>
          <p className={classes.label}>Main</p>
          <p className={classes.input}>{props.main}</p>
        </div>
        <div className={classes.detailsarea}>
          <p className={classes.label}>Logs</p>
          <Link href={props.logs} target="_blank">
            <p className={classes.input}>{props.logs}</p>
          </Link>
        </div>
        <div className={classes.detailsarea}>
          <p className={classes.label}>Do you have working microphone?</p>
          <p className={classes.input}>{props.mic}</p>
        </div>

        <div className={classes.detailsarea}>
          <p className={classes.label}>UI in combat</p>
          <Link href={props.ui} target="_blank">
            <p className={classes.input}>{props.ui}</p>
          </Link>
        </div>
        <div className={classes.detailsarea}>
          <p className={classes.label}>
            We raid on Monday and Wednesday, 20:00-23:00 CEST. Are you sure, you
            can commit to this schedule?
          </p>
          <p className={classes.input}>{props.attendance}</p>
        </div>
        <div className={classes.detailsarea}>
          <p className={classes.label}>ID</p>
          <p className={classes.input}>{props.id}</p>
        </div>
        <div className={classes.buttons}>
          <button onClick={copyDiscord} className={classes.accept}>
            {!isCopied ? "Accept" : "Discord copied"}
          </button>
          <button
            onClick={() => deleteApplicationHandler(props.id, setUsers)}
            className={classes.delete}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

//accept copy discordID
