import { Card } from "@/Components/Common/Card/Card";
import { Filter } from "../Filter/Filter";

export function Body() {
  return (
    <div>
      <Filter />
      <div className="flex gap-4 px-[150px] py-5 mt-5">
        <Card title={"새로 만들기"} type={"create"} />
        {/* 예시 */}
        <Card
          title={
            "운송·냉장 운영 데이터 기반 탄소감축량 산정 및 크레딧 생성 시스템"
          }
          type={"note"}
        />
      </div>
    </div>
  );
}
