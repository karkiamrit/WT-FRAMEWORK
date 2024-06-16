import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="complete" source="complete" />
        <TextInput label="finish" source="finish" />
        <TextInput label="owner" source="owner" />
        <TextInput label="start" source="start" />
      </SimpleForm>
    </Create>
  );
};
