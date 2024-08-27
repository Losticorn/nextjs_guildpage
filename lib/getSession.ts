import { auth } from "../auth";
import { cache } from "react";

export const getSession = cache(async () => {
  const session = await auth();
  console.log(session)
  return {session, user: session?.user};
});