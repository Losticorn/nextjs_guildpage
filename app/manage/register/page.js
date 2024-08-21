import { register } from "../../../action/user";
import { getSession } from "../../../lib/getSession";
import { redirect } from "next/navigation";
import classes from "../../styles/Register.module.css";

const Register = async () => {
  const { user } = await getSession();
  if (!user) redirect("/");

  return (
    <main className={classes.main}>
      <h1>Create new user</h1>

      <form action={register}>
        <div className={classes.area}>
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            placeholder="Name"
            type="text"
            name="firstname"
          />
        </div>
        <div className={classes.area}>
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            placeholder="Nickname"
            type="text"
            name="lastname"
          />
        </div>
        <div className={classes.area}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            placeholder="example@email.com"
            type="email"
            name="email"
          />
        </div>

        <div className={classes.area}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="***********"
            type="password"
            name="password"
          />
        </div>
        <div className={classes.submitarea}>
          <button className={classes.submitbtn}>Create user</button>
        </div>
      </form>
    </main>
  );
};
export default Register;
