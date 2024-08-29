import { fetchAllApplications } from "../../../action/user";
import ApplicationItem from "../Application/ApplicationItem";
import classes from "../../styles/ListOfApplications.module.css";

export default async function ListOfApplications() {
  const applications = await fetchAllApplications();

  return (
    <>
      <ul className={classes.applicationslist}>
        {applications.map((app) => (
          <ApplicationItem
            name={app.name}
            discord={app.discord}
            raidtype={app.raidtype}
            role={app.role}
            main={app.main}
            logs={app.logs}
            mic={app.mic}
            ui={app.ui}
            attendance={app.attendance}
            id={app.id}
          />
        ))}
      </ul>
    </>
  );
}
