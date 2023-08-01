import {createSlice} from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'authenticationData',
    initialState: {
        token:''
    },
    reducers: {
        setTokens: (state, action) =>{
            state.token = action.payload
        }
    }
})

export const {
    setTokens
} = authSlice.actions;

export default authSlice.reducer;