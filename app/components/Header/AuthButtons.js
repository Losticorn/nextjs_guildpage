import Link from "next/link";
import { signOut } from "../../../auth";
import Button from "../Header/Buttons";

export default async function AuthButtons({ user }) {
  console.log(user);
  return (
    <div>
      {!user ? (
        <Link href="/login">
          <Button title="Login" />
        </Link>
      ) : (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button title="Logout" />
        </form>
      )}
    </div>
  );
}
