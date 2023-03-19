import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { mockHsnResponse } from "../mockData";
import { IHsnDetails } from "../types/hsndetails";

export const getHsnList = createAsyncThunk("user/getHsnList", async () => {
  // need replace with actual Api
  try {
    // const response = await axios.get(`${ENDPOINT}/getAllhsn`);
    // const response = await response.json();
    // return response
    return mockHsnResponse;
  } catch (error) {
    //console.log(error)
  }
});

export const addHsn = createAsyncThunk(
  "user/updateHsnList",
  async (hanValu: IHsnDetails) => {
    console.log(hanValu, "hanValu");
    // need replace with actual Api
    try {
      // const response = await axios.get(`${ENDPOINT}/hsn`);
      // const response = await response.json();
      // return response
      return hanValu;
    } catch (error) {
      //console.log(error)
    }
  }
);

export const deleteHsn = createAsyncThunk(
  "user/deleteHsnList",
  async (row: IHsnDetails, { dispatch }) => {
    // need replace with actual Api
    try {
      // const response = await axios.get(`${ENDPOINT}/id`);
      // const response = await response.json();
      // return response
      return row;
    } catch (error) {
      //console.log(error)
    }
  }
);
