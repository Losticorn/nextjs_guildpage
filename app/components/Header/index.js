import { getSession } from "../../../lib/getSession";
import Navigation from "./Navigation";
import classes from "../../styles/Navigation.module.css";
import AuthButtons from "./AuthButtons";

export default async function Header() {
  const { user } = await getSession();
  console.log(user);

  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <Navigation user={user} />
        <AuthButtons user={user} />
      </nav>
    </header>
  );
}
