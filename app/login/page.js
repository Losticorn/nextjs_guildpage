import { login } from "../../action/user";
import { redirect } from "next/navigation";
import { getSession } from "../../lib/getSession";
import classes from "../styles/LoginForm.module.css";
import Button from "../components/Header/Buttons";

const Login = async () => {
  const { user } = await getSession(); // if you are logged in it will redirect you to the home page
  if (user) redirect("/");

  return (
    <main className={classes.main}>
      <h1>Login</h1>

      <form className={classes.loginform} action={login}>
        <div className={classes.area}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Enter your email"
            type="email"
            name="email"
          />
        </div>

        <div className={classes.area}>
          <label htmlFor="email">Password</label>
          <input
            id="password"
            placeholder="*************"
            type="password"
            name="password"
          />
        </div>
        <div className={classes.submitarea}>
          <Button className={classes.submitbtn} title="Login" />
        </div>
        <div />
      </form>
    </main>
  );
};

export default Login;
