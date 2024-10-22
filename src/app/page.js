import { redirect } from "next/navigation";

export default function Home() {
  // Later you can add authentication check here
  // if (!isAuthenticated) redirect('/auth/signin')
  redirect("/chat");
}
