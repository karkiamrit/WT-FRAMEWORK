import { SortOrder } from "../../util/SortOrder";

export type EmailTemplateOrderByInput = {
  createdAt?: SortOrder;
  htmlContent?: SortOrder;
  id?: SortOrder;
  textContent?: SortOrder;
  updatedAt?: SortOrder;
};
