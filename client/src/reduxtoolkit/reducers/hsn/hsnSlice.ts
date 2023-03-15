import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteHsn, getHsnList, updateHsnList } from "../../../api/hsnApis";


type HsnProps = {
  loading: boolean;
  data: any;
  error: string;
};

const initialState: HsnProps = {
  loading: false,
  data: [],
  error: "",
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
      state.error = "";
      state.data = `${action.payload}`;
    });
    builder.addCase(updateHsnList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateHsnList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    });
    builder.addCase(updateHsnList.rejected, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = `${action.payload}`;
    });
    builder.addCase(deleteHsn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteHsn.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    });
    builder.addCase(deleteHsn.rejected, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = `${action.payload}`;
    });
  },
});

export default hsnSlice.reducer;
