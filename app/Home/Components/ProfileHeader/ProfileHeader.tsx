"use client";

import { Session } from "next-auth";
import { AudioLines, Settings } from "lucide-react";
import { ProfileImage } from "./ProfileImage/ProfileImage";

export function ProfileHeader({ session }: { session: Session }) {
  return (
    <div className="flex items-center justify-between p-4 px-5">
      <div className="flex items-center gap-2">
        <AudioLines className="h-7 w-7 text-gray-100" />
        <span className="text-white font-semibold text-2xl">POPLINGO</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="border border-gray-700 px-4 py-2 last:*: flex  items-center gap-2 rounded-full  hover:bg-gray-700 transition focus:outline-none"
        >
          <Settings className="h-5 w-5 text-gray-300" />
          <span className="text-white text-xs font-bold">설정</span>
        </button>
        <div>
          <ProfileImage
            src={session.user?.image}
            alt="Profile"
            fallbackInitial={session.user?.name?.charAt(0)}
            session={session}
          />
        </div>
      </div>
    </div>
  );
}
