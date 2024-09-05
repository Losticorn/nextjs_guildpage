import { login } from "../../action/user";
import { redirect } from "next/navigation";
import { getSession } from "../../lib/getSession";

import Button from "../components/Header/Buttons";

const Login = async () => {
  const { user } = await getSession(); // if you are logged in it will redirect you to the home page
  if (user) redirect("/");

  return (
    <main className="main">
      <h1>Login</h1>

      <form className="loginform" action={login}>
        <div className="area">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Enter your email"
            type="email"
            name="email"
          />
        </div>

        <div className="area">
          <label htmlFor="email">Password</label>
          <input
            id="password"
            placeholder="*************"
            type="password"
            name="password"
          />
        </div>
        <div className="submitarea">
          <Button className="submitbtn" title="Login" />
        </div>
        <div />
      </form>
    </main>
  );
};

export default Login;
