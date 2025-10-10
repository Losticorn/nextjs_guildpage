import { getSession } from "../../../lib/getSession";
import Navigation from "./Navigation";
import AuthButtons from "./AuthButtons";

export default async function Header() {
  const { user } = await getSession();
  console.log(user);

  return (
    <header className="flex justify-center flex-wrap header_bg_img">
      <nav className="w-[1400px] flex items-center justify-between py-6">
        <Navigation user={user} />
        {/*<AuthButtons user={user} />*/}
      </nav>
    </header>
  );
}
