"use client";

import Image from "next/image";
import { useState } from "react";
import { ProfileModal } from "../ProfileModal/ProfileModal";
import { Session } from "next-auth";
export function ProfileImage({
  src,
  alt,
  fallbackInitial,
  session,
}: {
  src: string | null | undefined;
  alt: string;
  fallbackInitial?: string;
  session: Session;
}) {
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!src || imageError) {
    return (
      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-gray-600 text-xl font-semibold">
          {fallbackInitial?.toUpperCase() ?? "?"}
        </span>
      </div>
    );
  }

  return (
    <div className="flex">
      <Image
        src={src}
        alt={alt}
        width={35}
        height={35}
        className="rounded-full cursor-pointer"
        onError={() => setImageError(true)}
        onClick={() => setIsModalOpen(true)}
      />
      <div>
        {isModalOpen && (
          <ProfileModal
            onClose={() => setIsModalOpen(false)}
            session={session}
          />
        )}
      </div>
    </div>
  );
}
