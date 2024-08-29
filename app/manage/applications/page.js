import ListOfApplications from "../../components/Application/ListOfApplications";
import classes from "../../styles/Applications.module.css";

export default function Applications() {
  return (
    <main className={classes.main}>
      <h1>Applications</h1>
      <ListOfApplications />
    </main>
  );
}
