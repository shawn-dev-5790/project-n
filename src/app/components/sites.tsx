'use client'

import style from './sites.module.scss'

export default function Sites({ sites = [] }: { sites: any[] }) {
  return (
    <div className={style.wrap}>
      <div className={style.head}>
        <strong>사이트 목록</strong>
        <button>사이트 생성</button>
      </div>
      <ul>
        {sites.map((site) => (
          <li key={site}>{site}</li>
        ))}
      </ul>
      <div>
        <span>pagenation</span>
      </div>
    </div>
  )
}
