import { SensorData as TSensorData } from "../api/sensorData/SensorData";

export const SENSORDATA_TITLE_FIELD = "deviceOwner";

export const SensorDataTitle = (record: TSensorData): string => {
  return record.deviceOwner?.toString() || String(record.id);
};
