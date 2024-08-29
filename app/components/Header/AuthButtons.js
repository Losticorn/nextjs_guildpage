import Link from "next/link";
import { signOut } from "../../../auth";
import Button from "../Header/Buttons";
import { CiLogin, CiLogout } from "react-icons/ci";

export default async function AuthButtons({ user }) {
  console.log(user);
  return (
    <div>
      {!user ? (
        <Link href="/login">
          <Button title="Login">
            <CiLogin />
          </Button>
        </Link>
      ) : (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button title="Logout">
            <CiLogout />
          </Button>
        </form>
      )}
    </div>
  );
}
