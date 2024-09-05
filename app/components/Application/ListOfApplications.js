import { fetchAllApplications } from "../../../action/user";
import ApplicationItem from "../Application/ApplicationItem";

export default async function ListOfApplications() {
  const applications = await fetchAllApplications();

  return (
    <>
      <ul className="flex flex-row flex-wrap m-0 mb-16 p-0 gap-1">
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
