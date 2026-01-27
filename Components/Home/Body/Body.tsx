import { Card } from "@/Components/Common/Card/Card";
import { Filter } from "../Filter/Filter";

const notes = [
  {
    title: "노래제목",
    type: "note",
    date: "2026. 1. 8.",
    sourceCount: 1,
  },
];

export function Body() {
  return (
    <div>
      <Filter />
      <div className="flex gap-4 px-[150px] py-5 mt-5 flex-wrap">
        <Card title={"새 노트 만들기"} type={"create"} />
        {notes.map((note, index) => (
          <Card
            key={`${note.title}-${index}`}
            title={note.title}
            type={note.type}
            date={note.date}
            sourceCount={note.sourceCount}
            // iconType={note.iconType}
          />
        ))}
      </div>
    </div>
  );
}
