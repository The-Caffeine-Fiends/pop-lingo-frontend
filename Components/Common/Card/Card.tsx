import { EllipsisVertical, PlusIcon } from "lucide-react";

export function Card({ title, type }: { title: string; type: string }) {
  return (
    <>
      {type === "note" ? (
        <div className="w-[270px] h-[200px] bg-gray-700 rounded-lg flex items-center px-[20px]">
          <div className="flex flex-col items-end">
            <div className="flex justify-between mb-10">
              <EllipsisVertical className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-white text-xl font-bold ">
              {title.length > 20 ? title.slice(0, 20) + "..." : title}
            </h2>
          </div>
        </div>
      ) : (
        <div className="w-[270px] h-[200px]  rounded-lg flex items-center justify-center border border-gray-700">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center h-full">
              <div className="flex justify-center items-center bg-gray-600 rounded-full p-2">
                <PlusIcon className="w-6 h-6 text-white " />
              </div>
              <h2 className="text-white text-xl font-semibold">{title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
