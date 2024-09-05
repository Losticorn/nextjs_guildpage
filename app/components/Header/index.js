import { getSession } from "../../../lib/getSession";
import Navigation from "./Navigation";
import AuthButtons from "./AuthButtons";

export default async function Header() {
  const { user } = await getSession();
  console.log(user);

  return (
    <header class="flex justify-center m-0 p-2 flex-wrap bg-[#0f0f0f] text-8 border-b-[1px]">
      <nav class="w-4/5 flex justify-between items-center max-sm:flex-col">
        <Navigation user={user} />
        <AuthButtons user={user} />
      </nav>
    </header>
  );
}
