// app/page.tsx
import { auth, signOut } from "./Auth/Auth";
import { SignIn } from "./Components/Login/Login";

export default async function Home() {
  const session = await auth();

  if (!session)
    return (
      <div>
        <p>로그인이 필요합니다.</p>
        <SignIn />
      </div>
    );

  return (
    <div>
      <p>환영합니다, {session.user?.name}님!</p>
      <img src={session.user?.image ?? ""} alt="Profile" />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">로그아웃</button>
      </form>
    </div>
  );
}
