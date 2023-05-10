import SearchBook from "./searchBook";
import BookCard from "./bookCard";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../hooks/hooks";
import { useGetBooksQuery } from "../store/apiSlice";

function MainBook() {
  const value = useAppSelector((state) => state.search.value);

  let { data: books, isLoading } = useGetBooksQuery(value);

  if (isLoading) {
    return (
      <Typography sx={{ fontSize: 20, textAlign: "center" }}>
        Loading...
      </Typography>
    );
  }

  return (
    <div>
      <SearchBook />
      <Box sx={{ flexGrow: 1, marginTop: "20px", padding: "0 20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 9, lg: 12, xl: 12 }}
        >
          {books?.items?.map((book: any) => (
            <Grid item xs={4} sm={4} md={3} key={book.id}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default MainBook;
