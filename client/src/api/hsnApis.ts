import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { mockHsnResponse, updatedHsnResponse } from "../mockDataHsn";
import { IHsnDetails } from "../types/hsndetails";

export const getHsnList = createAsyncThunk("user/getHsnList", async () => {
  // need replace with actual Api
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return mockHsnResponse;
  } catch (error) {}
});

export const addHsn = createAsyncThunk(
  "user/updateHsnList",
  async (hanValu: IHsnDetails) => {
    console.log(hanValu, "hanValu");
    // need replace with actual Api
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      return hanValu;
    } catch (error) {}
  }
);

export const deleteHsn = createAsyncThunk(
  "user/deleteHsnList",
  async (row: IHsnDetails, { dispatch }) => {
    // need replace with actual Api
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      return row;
    } catch (error) {}
  }
);
