import { signIn } from "../Auth/Auth";
import { LoginButton } from "./Components/LoginButton/LoginButton";
import { AudioLines } from "lucide-react";

export function LoginLayout() {
  const handleSignIn = async () => {
    "use server";
    await signIn("google");
  };

  return (
    <div className="min-h-screen w-full bg-[#22262b] flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-700 bg-[#22262b] p-8">
        {/* 커뮤니티 헤더 */}
    
         <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <AudioLines className="h-[50px] w-[50px] text-gray-100" />
        <span className="text-white font-bold text-2xl">POPLINGO</span>
      </div>

        {/* 환영 메시지 */}

        {/* 로그인 버튼 */}
        <LoginButton handleSignIn={handleSignIn} />

        {/* 약관 동의 텍스트 */}
        <p className="text-xs text-gray-400 text-center mt-6">
          계속 진행하면 커뮤니티의 서비스 약관 및 개인 정보 보호정책에 동의하는
          것으로 간주됩니다.
        </p>
      </div>
    </div>
  );
}
