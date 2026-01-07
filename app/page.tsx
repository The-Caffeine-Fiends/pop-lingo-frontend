// app/page.tsx
import { auth, signOut } from "./Auth/Auth";
import { LoginLayout } from "./Components/Login/LoginLayout";
import { HomeLayout } from "./Components/Home/HomeLayout";

export default async function Home() {
  const session = await auth();

  if (!session) return <LoginLayout />;

  return (
    <div>
      <HomeLayout session={session} />
    </div>
  );
}
