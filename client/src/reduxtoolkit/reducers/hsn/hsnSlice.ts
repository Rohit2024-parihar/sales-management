import { createSlice } from "@reduxjs/toolkit";
import { deleteHsn, getHsnList, addHsn } from "../../../api/hsnApis";

type HsnProps = {
  loading: boolean;
  data: any;
  error: string;
};

const initialState: HsnProps = {
  loading: false,
  data: [],
  error: ""
};

const hsnSlice = createSlice({
  name: "HsnList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHsnList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHsnList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    });
    builder.addCase(getHsnList.rejected, (state, action) => {
      state.loading = false;
      state.error = "error";
      state.data = `${action.payload}`;
    });
    builder.addCase(addHsn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addHsn.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.error = "";
      // state.data = state.data.concat(action.payload);
    });
    builder.addCase(addHsn.rejected, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = `${action.payload}`;
    });
    builder.addCase(deleteHsn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteHsn.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      // state.data = state.data.filter((data: any) => data.id !== (payload as any).id);
    });
    builder.addCase(deleteHsn.rejected, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = `${action.payload}`;
    });
  }
});

export default hsnSlice.reducer;
