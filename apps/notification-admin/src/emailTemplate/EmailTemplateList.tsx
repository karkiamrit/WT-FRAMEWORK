import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmailTemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmailTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="htmlContent" source="htmlContent" />
        <TextField label="ID" source="id" />
        <TextField label="textContent" source="textContent" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
