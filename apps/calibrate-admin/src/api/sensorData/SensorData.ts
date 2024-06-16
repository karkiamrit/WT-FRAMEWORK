export type SensorData = {
  createdAt: Date;
  deviceOwner: string | null;
  id: string;
  key?: "Option1" | null;
  timestamp: Date | null;
  updatedAt: Date;
  value: number | null;
};
