import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    courseDetails:""
}
 const courseDetailsSlice = createSlice({
    name:"courseDetails",
    initialState,
    reducers:{
        setDetails:(state, action)=>{
            state.courseDetails = action.payload
        }
    }
})
export const {setDetails} = courseDetailsSlice.actions;
export default courseDetailsSlice.reducer;