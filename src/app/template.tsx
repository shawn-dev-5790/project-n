import AppHead from './components/head'
import style from './template.module.scss'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.wrap}>
      <header className={style.header}>
        <AppHead />
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}></footer>
    </div>
  )
}
