import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NameState {
  name: string;
}

const initialState: NameState = {
  name: "",
};

const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;

export default nameSlice.reducer;
