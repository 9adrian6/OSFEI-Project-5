import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialValue {
  value: string;
}

const initialState: InitialValue = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchWord(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { searchWord } = searchSlice.actions;
export default searchSlice.reducer;
