import { Module } from "@nestjs/common";
import { SensorDataModuleBase } from "./base/sensorData.module.base";
import { SensorDataService } from "./sensorData.service";
import { SensorDataController } from "./sensorData.controller";
import { SensorDataGrpcController } from "./sensorData.grpc.controller";
import { SensorDataResolver } from "./sensorData.resolver";

@Module({
  imports: [SensorDataModuleBase],
  controllers: [SensorDataController, SensorDataGrpcController],
  providers: [SensorDataService, SensorDataResolver],
  exports: [SensorDataService],
})
export class SensorDataModule {}
