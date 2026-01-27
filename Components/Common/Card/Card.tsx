import { EllipsisVertical, FileText, Plus, Sprout } from "lucide-react";

interface CardProps {
  title: string;
  type: string;
  date?: string;
  sourceCount?: number;
  iconType?: "note" | "sprout";
}

export function Card({
  title,
  type,
  date,
  sourceCount,
  iconType = "note",
}: CardProps) {
  if (type === "create") {
    return (
      <div className="w-[270px] h-[200px] bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Plus className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-white text-lg font-medium">{title}</h2>
        </div>
      </div>
    );
  }

  const isSpecial = iconType === "sprout";
  const bgColor = isSpecial ? "bg-amber-900/30" : "bg-gray-800";
  const IconComponent = isSpecial ? Sprout : FileText;
  const iconColor = isSpecial ? "text-green-500" : "text-yellow-500";

  return (
    <div
      className={`w-[270px] h-[200px] ${bgColor} rounded-lg p-4 flex flex-col`}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          {!isSpecial ? (
            <div className="relative">
              {/* <FileText className="w-5 h-5 text-yellow-500" /> */}
              {/* <span className="absolute -top-1 left-0 text-[7px] text-yellow-500 font-semibold leading-none">
                Notes
              </span> */}
            </div>
          ) : (
            <Sprout className="w-5 h-5 text-green-500" />
          )}
        </div>
        <button className="text-gray-400 hover:text-white transition">
          <EllipsisVertical className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-white text-base font-medium leading-snug mb-auto">
          {title}
        </h2>
        {date && (
          <p className="text-gray-400 text-sm mt-auto pt-2">
            {date} • 소스 {sourceCount ?? 0}개
          </p>
        )}
      </div>
    </div>
  );
}
