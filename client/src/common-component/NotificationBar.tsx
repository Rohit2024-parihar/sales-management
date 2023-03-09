import { Alert, Button, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../reduxtoolkit/reducers/app/appSlice";
import { RootState } from "../reduxtoolkit/store";

const NotificationBar = () => {
  const dispatch = useDispatch();
  const notificationState = useSelector((state: RootState) => state.app.notificationState);
  const handleClose = (event?: any, reason?: any) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setNotification(false));
  };

  return (
    <>
      <Snackbar
        open={notificationState}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{vertical:'top',horizontal:'center'}}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default NotificationBar;
