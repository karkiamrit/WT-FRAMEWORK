import * as graphql from "@nestjs/graphql";
import { SensorDataResolverBase } from "./base/sensorData.resolver.base";
import { SensorData } from "./base/SensorData";
import { SensorDataService } from "./sensorData.service";

@graphql.Resolver(() => SensorData)
export class SensorDataResolver extends SensorDataResolverBase {
  constructor(protected readonly service: SensorDataService) {
    super(service);
  }
}
