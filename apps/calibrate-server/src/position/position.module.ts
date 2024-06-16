import { Module } from "@nestjs/common";
import { PositionModuleBase } from "./base/position.module.base";
import { PositionService } from "./position.service";
import { PositionController } from "./position.controller";
import { PositionGrpcController } from "./position.grpc.controller";
import { PositionResolver } from "./position.resolver";

@Module({
  imports: [PositionModuleBase],
  controllers: [PositionController, PositionGrpcController],
  providers: [PositionService, PositionResolver],
  exports: [PositionService],
})
export class PositionModule {}
