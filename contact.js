import { configureContact} from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";

export default configureContact({
  reducer: {
    users: usersReducer,
  },
});