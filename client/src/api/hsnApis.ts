import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { mockHsnResponse, updatedHsnResponse } from "../mockDataHsn";

export const getHsnList = createAsyncThunk("user/getHsnList", async () => {
  // need replace with actual Api
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return mockHsnResponse;
});

export const updateHsnList = createAsyncThunk(
  "user/updateHsnList",
  async () => {
    // need replace with actual Api
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return updatedHsnResponse;
  }
);

export const deleteHsn = createAsyncThunk("user/deleteHsnList", async () => {
  // need replace with actual Api
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return response;
});
