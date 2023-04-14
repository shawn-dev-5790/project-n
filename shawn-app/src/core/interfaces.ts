export interface ILayout {
  children: React.ReactNode;
}

export interface IRouteGetResponseWithParams extends Response {
  params: { report_id: string };
}
