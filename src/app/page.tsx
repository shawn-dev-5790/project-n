import style from './page.module.scss'
import Sites from './components/sites'

export default function RootPage() {
  const sites = Array.from({ length: 20 }, (_, i) => i++)

  return (
    <div className={style.page}>
      <div className={style.inner}>
        <div className={style.head}>
          <h2>H2: Page Title</h2>
          <p>
            P: Page description - Welcome to H1LOGO, an experimental web space built on Next.js 13. Our platform serves
            as a cutting-edge playground and prototype hub where innovation takes the forefront. Embracing the power of
            Next.js 13, a leading framework for React applications, we are dedicated to pushing the boundaries of web
            development. Dive into the world of rapid prototyping, interactive user experiences, and dynamic interfaces.
            Explore an assortment of tools, components, and features that Next.js 13 has to offer. Whether you`&#39;`re
            a developer seeking to test new ideas or a designer aiming to craft immersive UIs, H1LOGO provides the
            perfect environment to turn your vision into reality. Join us on this journey as we unveil the future of web
            development with Next.js 13. Discover, create, and innovate with us at H1LOGO.
          </p>
        </div>
        <div className={style.cont}>
          <section>content section 1</section>
          <section>content section 2</section>
          <section>content section 3</section>
          <section>content section 4</section>
        </div>
      </div>
    </div>
  )
}

function SiteList() {
  return (
    <section>
      <div>{/* <button>생성</button> */}</div>
      <div></div>
    </section>
  )
}
