/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SensorDataCreateInput } from "./SensorDataCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateSensorDataArgs {
  @ApiProperty({
    required: true,
    type: () => SensorDataCreateInput,
  })
  @ValidateNested()
  @Type(() => SensorDataCreateInput)
  @Field(() => SensorDataCreateInput, { nullable: false })
  data!: SensorDataCreateInput;
}

export { CreateSensorDataArgs as CreateSensorDataArgs };
