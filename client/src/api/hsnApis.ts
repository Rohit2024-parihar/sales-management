import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { mockHsnResponse } from "../mockData";
import { IHsnDetails } from "../types/hsndetails";

const ENDPOINT = "http://localhost:5000/api";
export const getHsnList = createAsyncThunk("user/getHsnList", async () => {
  // need replace with actual Api
  try {
    let response = await axios.get(`${ENDPOINT}/hsn`);

    // convert _id to id from backend only
    const result = response.data.hsnCodes.map((data:any) =>{
      return {id:data._id, hsnNo: data.hsnNo, gst : data.gst }
    });
    console.log(result, 'result')
    // response = await response.json();
    return result
    // return mockHsnResponse;
  } catch (error) {
    console.log(error)
  }
});

export const addHsn = createAsyncThunk(
  "user/updateHsnList",
  async (hsnData: IHsnDetails) => {
    // need replace with actual Api
    try {
      let response = await axios(
        {
          method: "POST",
          url: `${ENDPOINT}/hsn`,
          data:hsnData
        })
      return response
      // return hanValu;
    } catch (error) {
      //console.log(error)
    }
  }
);

export const deleteHsn = createAsyncThunk(
  "user/deleteHsnList",
  async (row: IHsnDetails, { dispatch }) => {
    const {id} = row
    try {
      const response = await axios.delete(`${ENDPOINT}/hsnById/${id}`);
      return row;
    } catch (error) {
      //console.log(error)
    }
  }
);
