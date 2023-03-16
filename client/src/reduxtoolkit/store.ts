import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/app/appSlice";
import companyFormSlice from "./reducers/company/companyFormSlice";
import hsnSlice from "./reducers/hsn/hsnSlice";
import invioceFormSlice from "./reducers/vendor/invioceFormSlice";


export const store = configureStore({
  reducer: {
    invioceForm: invioceFormSlice,
    hsn:hsnSlice,
    companyFormReducer: companyFormSlice,
    app: appSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
