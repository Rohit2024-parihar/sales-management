import { createSlice } from "@reduxjs/toolkit";
import {
    addMedicine,
    deleteMedicine,
    getAllmedicine,
    updateMedicine
} from "../../../api/ProductDetailApi";

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

const medicineSlice = createSlice({
    name: "medicine",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllmedicine.pending, (state) => {
            console.log("pending");
            state.loading = true;
        });
        builder.addCase(getAllmedicine.fulfilled, (state, action) => {
            console.log("fulfilled", action);
            state.loading = false;
            state.error = "";
            state.data = action.payload;
        });
        builder.addCase(getAllmedicine.rejected, (state, action) => {
            state.loading = false;
            state.error = "error";
            state.data = `${action.payload}`;
        });
        builder.addCase(addMedicine.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addMedicine.fulfilled, (state: any, action: any) => {
            state.loading = false;
            state.error = "";
            state.data = state.data.concat(action.payload);
        });
        builder.addCase(addMedicine.rejected, (state, action) => {
            state.loading = false;
            state.error = "";
            state.data = `${action.payload}`;
        });
        builder.addCase(deleteMedicine.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteMedicine.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = "";
            state.data = state.data.filter(
                (data: any) => data.id !== (payload as any).id
            );
        });
        builder.addCase(deleteMedicine.rejected, (state, action) => {
            state.loading = false;
            state.error = "";
            state.data = `${action.payload}`;
        });
        builder.addCase(updateMedicine.pending, (state, { payload }) => {
            state.loading = true;
        });
        builder.addCase(updateMedicine.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = "";
            state.data = state.data.filter(
                (data: any) => data.id !== (payload as any).id
            );
        });
        builder.addCase(updateMedicine.rejected, (state, action) => {
            state.loading = false;
            state.error = "";
            state.data = `${action.payload}`;
        });
    }
});

export default medicineSlice.reducer;
