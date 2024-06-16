import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SensorDataService } from "./sensorData.service";
import { SensorDataGrpcControllerBase } from "./base/sensorData.grpc.controller.base";

@swagger.ApiTags("sensorData")
@common.Controller("sensorData")
export class SensorDataGrpcController extends SensorDataGrpcControllerBase {
  constructor(protected readonly service: SensorDataService) {
    super(service);
  }
}
