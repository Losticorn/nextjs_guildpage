"use client";
import Link from "next/link";
import classes from "../../styles/ApplicationItem.module.css";
import Button from "../Header/Buttons";
import { deleteApplication } from "../../../action/user";

export default function ApplicationItem(props) {
  return (
    <li className={classes.applicationlist}>
      <h1 className={classes.name}>{props.name}</h1>
      <div className={classes.details}>
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
      </div>
      <div className={classes.buttons}>
        <Button title="Accept" />
        <Button
          title="Delete"
          onClick={() => {
            deleteApplication(props.id);
          }}
        />
      </div>
    </li>
  );
}
