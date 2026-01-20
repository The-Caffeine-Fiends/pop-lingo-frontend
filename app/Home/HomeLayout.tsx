import { Session } from "next-auth";
import { ProfileHeader } from "./Components/ProfileHeader/ProfileHeader";

export function HomeLayout({ session }: { session: Session }) {
  return (
    <div className="min-h-screen w-full bg-[#22262b] flex flex-col ">
      {/* header */}
      <ProfileHeader session={session} />
    </div>
  );
}
