import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCompany, getCompanyList } from "../../../api/companyApis";
import { IcompanyName, IcompanyNamestate } from "../../../types/company";
const initialState: IcompanyNamestate = {
  companyName: [],
  loading: false,
  error: "",
};
const companyFormSlice = createSlice({
  name: "companyForm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanyList.pending, (state:any) => {
      state.loading = true;
    });
    builder.addCase(getCompanyList.fulfilled, (state, action: any) => {
      console.log(action, 'action getCompanyList')
      state.loading = false;
      state.error = "";
      state.companyName = action.payload;
    });
    builder.addCase(getCompanyList.rejected, (state, action) => {
      state.loading = false;
      state.error = `${action.payload}`;
    });
    builder.addCase(addCompany.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCompany.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.error = "";
      // state.companyName = state.companyName.concat(action.payload);
    });
    builder.addCase(addCompany.rejected, (state, action) => {
      state.loading = false;
      state.error = `${action.payload}`;
    });
    builder.addCase(deleteCompany.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCompany.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(deleteCompany.rejected, (state, action) => {
      state.loading = false;
      state.error = `${action.payload}`;
    });
  },
});
export default companyFormSlice.reducer;
