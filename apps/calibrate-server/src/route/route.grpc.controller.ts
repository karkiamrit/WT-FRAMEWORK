import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RouteService } from "./route.service";
import { RouteGrpcControllerBase } from "./base/route.grpc.controller.base";

@swagger.ApiTags("routes")
@common.Controller("routes")
export class RouteGrpcController extends RouteGrpcControllerBase {
  constructor(protected readonly service: RouteService) {
    super(service);
  }
}
