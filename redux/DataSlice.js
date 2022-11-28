import {createSlice} from "@reduxjs/toolkit";

export const RoutineSlice = createSlice({
    name: "DataSlice",
    initialState: {
        platform: null,
        progress: null,
        complexity: null,
        features: null,
    },
    reducers: {
        setPlatform: (state, action) => {
            state.platform = action.payload;
        },
        setProgress: (state, action) => {
            state.progress = action.payload;
        },
        setComplexity: (state, action) => {
            state.complexity = action.payload;
        },
        setFeatures: (state, action) => {
            state.features = action.payload;
        },
    },
});

export const {setPlatform, setProgress, setComplexity, setFeatures} =
    RoutineSlice.actions;
export default RoutineSlice.reducer;
