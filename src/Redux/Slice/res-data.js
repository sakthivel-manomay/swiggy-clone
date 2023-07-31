import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4325894&lng=78.4070691&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

export const fetchRes = createAsyncThunk('fetchRes', async()=>{
    /*const response = await fetch('https://jsonplaceholder.typicode.com/todos');*/
    const response = await fetch(url);
    return response.json();
})

const resDataSlice = createSlice({
    name:"resData",
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers:(builder)=>{
        
        builder.addCase(fetchRes.pending,(state,action)=>{
            state.isLoading=true;
        });

        builder.addCase(fetchRes.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });

        builder.addCase(fetchRes.rejected,(state,action)=>{
            console.log("Error", action.payload)
            state.isError =true;
        });
    }
});

export default resDataSlice.reducer;