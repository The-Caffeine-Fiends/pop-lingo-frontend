import { signIn } from "../../Auth/Auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">구글로 로그인하기</button>
    </form>
  );
}
