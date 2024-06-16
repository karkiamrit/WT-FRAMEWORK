import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  isVerified?: boolean | null;
  lastName?: string | null;
  password?: string;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  status?: "Option1" | null;
  username?: string;
};
