import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./slices/score";

const store = configureStore({
	reducer: {
		score: scoreReducer,
	},
});

export default store;
