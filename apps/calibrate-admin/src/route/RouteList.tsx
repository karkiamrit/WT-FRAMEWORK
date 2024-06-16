import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const RouteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Routes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="complete" source="complete" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="finish" source="finish" />
        <TextField label="ID" source="id" />
        <TextField label="owner" source="owner" />
        <TextField label="start" source="start" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
