import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { mockCompanyResponse} from "../mockData";
import { setNotification } from "../reduxtoolkit/reducers/app/appSlice";
import { IcompanyName } from "../types/company";

export const getCompanyList = createAsyncThunk("user/getCompanyList", async () => {
  // need replace with actual Api
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return mockCompanyResponse;
  } catch (error) {}
});

export const addCompany = createAsyncThunk(
  "user/addCompany",
  async (hanValu: IcompanyName,{dispatch}) => {
    console.log(hanValu, "hanValu");
    // need replace with actual Api
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      return hanValu;
    } catch (error) {
      dispatch(setNotification({notificationState:true,message:error,severity:"error"}))
    }
  }
);

export const deleteCompany = createAsyncThunk(
  "user/deleteCompanyList",
  async (row: IcompanyName, { dispatch }) => {
    // need replace with actual Api
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      return row;
    } catch (error) {
      dispatch(setNotification({notificationState:true,message:error,severity:"error"}))
    }
  }
);
