const { createSlice } = require("@reduxjs/toolkit")

const initialState ={
    dashboardInfo: "",
}
const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setDashboardInfo: (state, action) => {
            state.dashboardInfo = action.payload;
        }
    }
})
export const {setDashboardInfo} = dashboardSlice.actions;
export default dashboardSlice.reducer;