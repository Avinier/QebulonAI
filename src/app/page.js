// app/page.js
import { redirect } from "next/navigation";
import { getSession } from "../lib/session";

export default async function Home() {
  const session = await getSession();

  if (!session) {
    redirect("/dashboard");
  } else {
    redirect("/signin");
  }

  return null;
}
