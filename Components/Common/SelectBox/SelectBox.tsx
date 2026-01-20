export function SelectBox({ text }: { text: string }) {
  return (
    <div className="border border-gray-700 rounded-full px-4 py-2 hover:bg-gray-700 transition cursor-pointer">
      <span className="text-white font-semibold text-sm">{text}</span>
    </div>
  )
}