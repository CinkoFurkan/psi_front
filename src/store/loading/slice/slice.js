import {createSlice} from "@reduxjs/toolkit";

const loading = createSlice({
    name: "loading",
    initialState: {
        loadingCount: 0,
    },
    reducers: {
        _setIncrementLoading: (state) => {
            state.loadingCount += 1;
        },
        _setDecrementLoading: (state) => {
            if (state.loadingCount > 0) {
                state.loadingCount -= 1;
            }
        },
    },
})


export const { _setIncrementLoading , _setDecrementLoading  } = loading.actions
export default loading.reducer;
