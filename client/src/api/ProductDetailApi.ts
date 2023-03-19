import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockMedicineResponse } from "../mockData";
import { ImedicineDetail } from "../types/ProductDetail";

const ENDPOINT = "https://localhost:3000";

export const getAllmedicine = createAsyncThunk(
  "medicine/getAllmedicine",
  async () => {
    try {
      // const response = await axios.get(`${ENDPOINT}/medicine/getAll`);
      // const response = await response.json();
      // return response
      return mockMedicineResponse;
    } catch (error) {
      //console.log(error)
    }
  }
);

export const addMedicine = createAsyncThunk(
  "medicine/addMedicine",
  async (medicineData: ImedicineDetail) => {
    try {
      // const response = await axios.get(`${ENDPOINT}/medicine/add`);
      // const response = await response.json();
      // return response
      return mockMedicineResponse;
    } catch (error) {
      //console.log(error)
    }
  }
);

export const deleteMedicine = createAsyncThunk(
  "medicine/deleteMedicine",
  async (row: ImedicineDetail, { dispatch: any }) => {
    try {
      //add id as query params
      // const response = await axios.get(`${ENDPOINT}/medicine`);
      // const response = await response.json();
      // return response
    } catch (error) {
      //console.log(error)
    }
  }
);

export const updateMedicine = createAsyncThunk(
  "medicine/updateMedicine",
  async (row: ImedicineDetail, { dispatch }) => {
    try {
      //add id as query params
      // const response = await axios.get(`${ENDPOINT}/medicine`);
      // const response = await response.json();
      // return response
      return row;
    } catch (error) {
      //console.log(error)
    }
  }
);
