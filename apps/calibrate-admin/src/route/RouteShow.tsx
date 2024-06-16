import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
} from "react-admin";

export const RouteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="complete" source="complete" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="finish" source="finish" />
        <TextField label="ID" source="id" />
        <TextField label="owner" source="owner" />
        <TextField label="start" source="start" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
