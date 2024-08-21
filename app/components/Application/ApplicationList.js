import classes from "../../styles/ApplicationList.module.css";
import ApplicationItem from "./ApplicationItem";

export default function ApplicationList(props) {
  return (
    <ul className={classes.applicationslist}>
      {props.applications.map((application) => (
        <ApplicationItem
          name={application.name}
          discord={application.discord}
          raidtype={application.raidtype}
          role={application.role}
          main={application.main}
          logs={application.logs}
          mic={application.mic}
          ui={application.ui}
          attendance={application.attendance}
          id={application.id}
        />
      ))}
    </ul>
  );
}
