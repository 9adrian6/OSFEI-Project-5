import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../interfaces/bookInterface";

interface BookFavorite {
  favoriteBooks: Book[];
}

const initialState: BookFavorite = {
  favoriteBooks: [],
};

interface RemoveBook {
  id: string | undefined;
}

export const favoriteSlice = createSlice({
  name: "favoriteBooks",
  initialState,
  reducers: {
    setBookFavorite(state, action: PayloadAction<Book>) {
      state.favoriteBooks.push({ ...action.payload });
    },
    removeBook(state, action: PayloadAction<RemoveBook>) {
      state.favoriteBooks = state.favoriteBooks.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { setBookFavorite, removeBook } = favoriteSlice.actions;
export default favoriteSlice.reducer;
