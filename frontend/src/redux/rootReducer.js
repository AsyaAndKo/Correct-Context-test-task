import { combineReducers } from "redux";

import { schedulerReducer } from "./Scheduler/Scheduler.reducer";
import { nameReducer } from "./RepName/RepName.reducer";
import { formatReducer } from "./Format/Format.reducer";
import { emailReducer } from "./Email/Email.reducer";
import { snackBarReducer } from "./SnackBar/SnackBar.reducer";

export default combineReducers({
  currentName: nameReducer,
  currentFormat: formatReducer,
  currentEmail: emailReducer,
  currentScheduler: schedulerReducer,
  snackBarOpen: snackBarReducer,
});
