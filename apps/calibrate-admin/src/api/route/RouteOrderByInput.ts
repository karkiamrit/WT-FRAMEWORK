import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  complete?: SortOrder;
  createdAt?: SortOrder;
  finish?: SortOrder;
  id?: SortOrder;
  owner?: SortOrder;
  start?: SortOrder;
  updatedAt?: SortOrder;
};
