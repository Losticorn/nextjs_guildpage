import { useForm } from "react-hook-form";
import classes from "@/styles/CreateUser.module.css";

async function addUserHandler(enteredUserData) {
  console.log(enteredUserData);
  const response = await fetch("/api/new-user", {
    method: "POST",
    body: JSON.stringify(enteredUserData),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    // Handle error here
    console.error("Failed to submit your registration");
  }
}

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onCreateUser = (data) => addUserHandler(data);

  console.log(errors);
  return (
    <div className={classes.createuser}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit(onCreateUser)}>
        <div className={classes.area}>
          <label htmlFor="username">User name</label>
          <input
            placeholder="Enter your user name"
            type="text"
            required
            id="username"
            {...register("username")}
          ></input>
        </div>
        <div className={classes.area}>
          <label htmlFor="userpassword">Password</label>
          <input
            placeholder="Enter your password"
            type="userpassword"
            required
            id="userpassword"
            {...register("userpassword")}
          ></input>
        </div>
        <div className={classes.submitarea}>
          <button
            className={classes.createuserbtn}
            type="submit"
            title="Submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
