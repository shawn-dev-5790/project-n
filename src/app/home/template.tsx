import { IBaseNextComponent } from "@/assets/interface";

export default function Template({ children }: IBaseNextComponent) {
  return (
    <>
      <header>
        <h1>H1 Logo</h1>
        <span>App Template header</span>
      </header>
      <main>{children}</main>
      <footer>
        <small>app Template footer</small>
      </footer>
    </>
  );
}
