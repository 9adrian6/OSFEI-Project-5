import { useState, useEffect } from "react";
import { Box, InputBase } from "@mui/material";
import { useAppDispatch } from "../hooks/hooks";
import { searchWord } from "../store/searchSlice";
import { useDebounce } from "../hooks/hooks";

function SearchBook() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 300);

  useEffect(() => {
    if (search) {
      dispatch(searchWord(debounceSearch));
    }
  }, [search, debounceSearch, dispatch]);

  return (
    <Box
      sx={{
        bgcolor: "#93c5fd",
        height: "56px",
        width: "100%",
      }}
    >
      <InputBase
        sx={{
          width: "300px",
          marginLeft: "40%",
          marginTop: "1px",
          border: "1px solid grey",
          padding: "10px",
          borderRadius: "5px",
        }}
        inputProps={{
          style: { textAlign: "center" },
        }}
        placeholder="Search book"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
}

export default SearchBook;
