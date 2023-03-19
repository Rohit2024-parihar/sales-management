import {createSlice,PayloadAction} from '@reduxjs/toolkit'

type AppProps={
    notificationState:boolean
    message:string
    severity:any
}

const initialState:AppProps={
    notificationState:false,
    message:"",
    severity:"success"
}

const appSlice=createSlice({
    name:"App",
    initialState,
    reducers:{
        setNotification(state:AppProps,action:PayloadAction<any>){
            console.log(action.payload)
            state.notificationState=action.payload.notificationState;
            state.message=action.payload.message
            state.severity=action.payload.severity
            
            
        }
    }

})

export default appSlice.reducer;
export const {setNotification}=appSlice.actions