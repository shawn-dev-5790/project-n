'use client'

import style from './head.module.scss'
import { AppLogoImg, AppMenuSignOutImg } from './image'

export default function AppHead() {
  return (
    <div className={style.wrap}>
      <AppLogo />
      <AppMenu />
    </div>
  )
}

export function AppLogo() {
  return (
    <div className={style.logo}>
      <h1>
        <AppLogoImg />
      </h1>
      <p>
        <b>Exploring with Next.js 13</b>
        <small>A Prototyping Playground</small>
      </p>
    </div>
  )
}

export function AppMenu() {
  const menus = ['account', 'settings', 'notifications', 'profile', 'logout']
  return (
    <div className={style.menu}>
      <strong className="ir_so">Head Menu</strong>
      <ul>
        {menus.map((menu) => (
          <li key={menu}>
            <button>{menu.substring(0, 2).toLocaleUpperCase()}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
