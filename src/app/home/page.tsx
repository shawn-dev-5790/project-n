import scss from "./page.module.scss";

export default function App() {
  return (
    <div className={scss.wrap}>
      <div>
        <h2>H2: page title - App</h2>
      </div>
      <div>
        <div>page content</div>
        <section>section 1</section>
        <section>section 2</section>
        <section>section 3</section>
        <section>section 4</section>
      </div>
    </div>
  );
}
