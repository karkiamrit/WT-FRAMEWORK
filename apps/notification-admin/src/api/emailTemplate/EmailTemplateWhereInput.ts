import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmailTemplateWhereInput = {
  htmlContent?: StringNullableFilter;
  id?: StringFilter;
  textContent?: StringNullableFilter;
};
