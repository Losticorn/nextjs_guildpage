import { register } from "../../../action/user";
import { getSession } from "../../../lib/getSession";
import { redirect } from "next/navigation";

const Register = async () => {
  const { user } = await getSession();
  if (!user) redirect("/");

  return (
    <main className="main">
      <h1>Create new user</h1>

      <form action={register}>
        <div className="area">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            placeholder="example@email.com"
            type="email"
            name="email"
          />
        </div>

        <div className="area">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="***********"
            type="password"
            name="password"
          />
        </div>
        <div className="submitarea">
          <button className="submitbtn">Create user</button>
        </div>
      </form>
    </main>
  );
};
export default Register;
