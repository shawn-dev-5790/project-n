import type { Metadata } from "next";
import { ILayout } from "@/core/interfaces";
import Link from "next/link";
import ui from "./layout.module.css";

export default function ReportsLayout({ children }: ILayout) {
  return (
    <section className={ui.wrap}>
      <div className={ui.head}>
        <h2 className={ui.tit}>H2. Reports Layout</h2>
        <p className={ui.desc}>URL path : /reports/layout.tsx</p>
        <Link className={ui.link_back} href={"/"}>
          Go Back To Home
        </Link>
      </div>
      <div className={ui.cont}>{children}</div>
    </section>
  );
}
