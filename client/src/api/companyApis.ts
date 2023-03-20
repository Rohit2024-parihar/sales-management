import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mockCompanyResponse } from "../mockData";
import { setNotification } from "../reduxtoolkit/reducers/app/appSlice";
import { IcompanyName } from "../types/company";

const ENDPOINT = "http://localhost:5000/api";

export const getCompanyList = createAsyncThunk("user/getCompanyList", async (_, { dispatch }) => {
  // need replace with actual Api
  try {
    let response = await axios.get(`${ENDPOINT}/company`);
    console.log(response)
    const result = response.data.company.map((data: any) => {
      return { id: data._id, companyName: data.companyName}
    });
    console.log(result)

    return result;
  } catch (error) {
    dispatch(setNotification({ notificationState: true, message: error, severity: "error" }))
  }
});

export const addCompany = createAsyncThunk(
  "user/addCompany",
  async (company: IcompanyName, { dispatch }) => {
    console.log(company, "company");
    // need replace with actual Api
    try {
      let response = await axios(
        {
          method: "POST",
          url: `${ENDPOINT}/company`,
          data: company
        })
    } catch (error) {
      dispatch(setNotification({ notificationState: true, message: error, severity: "error" }))
    }
  }
);

export const deleteCompany = createAsyncThunk(
  "user/deleteCompanyList",
  async (companyRow: IcompanyName, { dispatch }) => {
    // need replace with actual Api
    const { id } = companyRow
    try {
      const response = await axios.delete(`${ENDPOINT}/companyById/${id}`);
      return response;
    } catch (error) {
      dispatch(setNotification({ notificationState: true, message: error, severity: "error" }))
    }
  }
);
