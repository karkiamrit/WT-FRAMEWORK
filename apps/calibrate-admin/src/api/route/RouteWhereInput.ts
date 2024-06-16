import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RouteWhereInput = {
  complete?: BooleanNullableFilter;
  finish?: StringNullableFilter;
  id?: StringFilter;
  owner?: StringNullableFilter;
  start?: StringNullableFilter;
};
