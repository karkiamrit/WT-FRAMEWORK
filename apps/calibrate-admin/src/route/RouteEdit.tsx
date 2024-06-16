import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="complete" source="complete" />
        <TextInput label="finish" source="finish" />
        <TextInput label="owner" source="owner" />
        <TextInput label="start" source="start" />
      </SimpleForm>
    </Edit>
  );
};
