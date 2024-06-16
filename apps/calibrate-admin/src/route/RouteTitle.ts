import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "finish";

export const RouteTitle = (record: TRoute): string => {
  return record.finish?.toString() || String(record.id);
};
