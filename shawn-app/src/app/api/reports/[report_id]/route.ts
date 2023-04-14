import { IRouteGetResponseWithParams } from "@/core/interfaces";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  response: IRouteGetResponseWithParams
) {
  const res = {
    name: "get report detail",
    report_id: response.params.report_id,
  };
  return NextResponse.json(res);
}
