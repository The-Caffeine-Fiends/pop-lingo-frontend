import { SelectBox } from "@/Components/Common/SelectBox/SelectBox";

export function Filter() {
  return (
    <div className="flex items-center justify-between p-4 px-[150px]">
      <div className="border border-gray-700 rounded-full px-4 py-2 hover:bg-gray-700 transition cursor-pointer">
        <span className="text-white font-semibold text-sm">전체</span>
      </div>
      <SelectBox text="최신항목" />
    </div>
  );
}
