import { SortOrder } from "../../util/SortOrder";

export type SensorDataOrderByInput = {
  createdAt?: SortOrder;
  deviceOwner?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
