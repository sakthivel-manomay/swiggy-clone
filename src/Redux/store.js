import { configureStore } from "@reduxjs/toolkit";
import resData from "./Slice/res-data";

export const store = configureStore({
    reducer:{
        res : resData,
    }
})