import style from './page.module.scss'

export default function CampaignsPage() {
  return (
    <div className={style.wrap}>
      <h2>page name : campaigns</h2>
      <div>
        <div>ON | 캠페인 이름 | (오디언스 | 트리거-이벤트-액션 | 채널) - 에드온 (지표 | 통계 |)</div>
        {Array.from({ length: 25 }, (_, i) => i + 1).map((v) => (
          <div key={v}>ON | 캠페인 이름 | (오디언스 | 스케쥴 | 채널) - 에드온 (지표 | 통계 |)</div>
        ))}
      </div>
    </div>
  )
}
