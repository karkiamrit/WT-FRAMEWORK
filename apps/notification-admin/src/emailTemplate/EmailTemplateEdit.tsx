import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EmailTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="htmlContent" multiline source="htmlContent" />
        <TextInput label="textContent" multiline source="textContent" />
      </SimpleForm>
    </Edit>
  );
};
