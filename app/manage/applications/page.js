import mongoose from "mongoose";
import ApplicationList from "../../components/Application/ApplicationList";
import classes from "../../styles/ManageApplications.module.css";

export async function getApplications() {
  const client = await mongoose.connect(process.env.MONGO_URI);

  const db = client.db();

  const applicationsCollection = db.collection("application");

  const applications = await applicationsCollection.find().toArray();

  client.close();

  return {
    props: {
      applications: applications.map(({ _id, main = "", ...rest }) => ({
        id: _id.toString(),
        main,
        ...rest,
      })),
    },
  };
}

export default function ManageApplications(props) {
  return (
    <main className={classes.mainapplications}>
      <h1>Applications</h1>
      <ApplicationList applications={props.applications} />
    </main>
  );
}
