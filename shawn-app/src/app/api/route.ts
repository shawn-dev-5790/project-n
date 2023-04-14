import { NextResponse } from "next/server";

export async function GET() {
  const res = {
    name: "GET API INDEX",
    ["report_id=1"]: "/api/reports/1",
  };
  return NextResponse.json(res);
}
