'use client'

import Link from 'next/link'
import style from './head.module.scss'
import { AppIcon } from './image'
import { useState } from 'react'

export default function AppHead() {
  return (
    <div className={style.wrap}>
      <div className={style.logo}>
        <button>
          <AppIcon name={'menu'} size={[24, 24]} />
        </button>
        <Link href={'/main'}>
          <h1>
            <span>DTR</span>
            <span>X</span>
            <span>SiteName</span> _ Kr
          </h1>
        </Link>
      </div>
      <div>search bars</div>
      <div className={style.menu}>
        <strong className="ir_so">Head Menu</strong>
        <ActiveStatement />
        <Notification />
        <Setting />
        <button className={style.avatar_btn} onClick={() => alert('avatar')}>
          <span className={style.avatar_circle}>s</span>
        </button>
      </div>
    </div>
  )
}

function ActiveStatement() {
  const SITE_STATE: { [k: number]: string } = { 0: '데모', 1: '구독', 2: '만료' }
  const [state, setState] = useState(0)
  const onSelectState = () => setState((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : 0))
  return (
    <button className={style.head_btn} onClick={onSelectState}>
      <AppIcon name={'active'} size={[24, 24]} />
      <span className={style.active_label}>{SITE_STATE[state]}</span>
    </button>
  )
}
function Notification() {
  const [count, setCount] = useState(0)
  const onIncreaseCount = () => setCount((prev) => prev + 7)
  return (
    <button className={style.head_btn} onClick={onIncreaseCount}>
      <AppIcon name={'bell'} size={[24, 24]} />
      <span className={style.noti_label}>{count}</span>
    </button>
  )
}
function Setting() {
  const [open, setOpen] = useState(false)
  const onToggle = () => setOpen((prev) => !prev)
  return (
    <div className="pos_rel">
      <button className={style.head_btn} onClick={onToggle}>
        <AppIcon name={'setting'} size={[24, 24]} />
      </button>
      {open && (
        <div className={style.setting_menu}>
          <button>
            <AppIcon name={'theme'} size={[24, 24]} />
            <span>디자인: 기기 테마</span>
            <AppIcon name={'arrow_right'} size={[16, 16]} />
          </button>
          <button>
            <AppIcon name={'lang'} size={[24, 24]} />
            <span>언어: 한국어</span>
            <AppIcon name={'arrow_right'} size={[16, 16]} />
          </button>
          <button>
            <AppIcon name={'globe'} size={[24, 24]} />
            <span>위치 : 한국</span>
            <AppIcon name={'arrow_right'} size={[16, 16]} />
          </button>
        </div>
      )}
    </div>
  )
}
