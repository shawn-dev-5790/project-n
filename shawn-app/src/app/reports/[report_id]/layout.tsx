import { ILayout } from "@/core/interfaces";
import Link from "next/link";

export default function ReportsLayout({ children }: ILayout) {
  return (
    <section>
      <div>
        <h3>app/reports/layout.tsx</h3>
        <Link href={"/"}>Home</Link>
      </div>
      <div>{children}</div>
    </section>
  );
}
