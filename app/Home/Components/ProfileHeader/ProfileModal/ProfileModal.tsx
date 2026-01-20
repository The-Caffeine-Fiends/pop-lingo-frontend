"use client";

import { signOutAction } from "@/app/Auth/actions";
import {
  MessageSquare,
  Search,
  Bell,
  Settings,
  LogOut,
  User,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { Session } from "next-auth";
export function ProfileModal({
  session,
  onClose,
}: {
  session: Session;
  onClose: () => void;
}) {
  const { user } = session;
  return (
    <div className="absolute top-[70px] right-[20px] z-50 w-[300px]">
      <div className=" rounded-xl shadow-xl bg-black flex flex-col gap-4 min-w-[220px] border border-gray-700">
        <div className="flex items-center gap-3 p-3 border-b border-gray-700 ">
          <div className="flex flex-col gap-1 w-full ">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold text-md">
                {user?.name}
              </span>
              <button
                onClick={onClose}
                className="flex rounded-lg p-1 text-xs text-gray-400 hover:text-white hover:bg-gray-700 transition self-end"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>
            </div>
            <span className="text-gray-300 text-xs">{user?.email}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-2 px-2 mt-[-10px]">
          <form action={signOutAction}>
            <button
              type="submit"
              className="flex p-3 w-full items-center gap-3 rounded-lg  hover:bg-gray-700 transition focus:outline-none "
            >
              <LogOut className="w-5 h-5 text-red-400" />
              <span className="text-red-500 text-sm font-medium">로그아웃</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
