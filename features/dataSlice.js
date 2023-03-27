const { createSlice } = require("@reduxjs/toolkit")
const initialState = {
    token: null,
    role: null,
}

const dataSlice = createSlice({
    name: "dataSlice",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setRole: (state, action) => {
            state.role = action.payload
        },
    }
})
export const {
    setToken,
    setRole,
} = dataSlice.actions
export default dataSlice.reducer