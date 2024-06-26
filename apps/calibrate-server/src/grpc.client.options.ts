import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["position", "route", "sensordata"],
    protoPath: [
      "src/position/position.proto",
      "src/route/route.proto",
      "src/sensordata/sensordata.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
