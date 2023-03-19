import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/app/appSlice";
import companyFormSlice from "./reducers/company/companyFormSlice";
import hsnSlice from "./reducers/hsn/hsnSlice";
import invioceFormSlice from "./reducers/vendor/invioceFormSlice";
import medicineSlice from "./reducers/ProductDetail/ProductDetailSlice";

export const store = configureStore({
  reducer: {
    invioceForm: invioceFormSlice,
    hsn: hsnSlice,
    companyFormReducer: companyFormSlice,
    app: appSlice,
    medicine: medicineSlice
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
