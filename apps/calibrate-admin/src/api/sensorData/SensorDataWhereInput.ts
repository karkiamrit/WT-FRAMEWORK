import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SensorDataWhereInput = {
  deviceOwner?: StringNullableFilter;
  id?: StringFilter;
  key?: "Option1";
  timestamp?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
