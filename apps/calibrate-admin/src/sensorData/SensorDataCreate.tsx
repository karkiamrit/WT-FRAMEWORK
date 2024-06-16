import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SensorDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="deviceOwner" source="deviceOwner" />
        <SelectInput
          source="key"
          label="key"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
