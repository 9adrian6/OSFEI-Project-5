import { Box, Typography, Checkbox, Container } from "@mui/material";
import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { removeBook, setBookFavorite } from "../store/favoriteSlice";
import { useParams } from "react-router-dom";
import { useGetBookPageQuery } from "../store/apiSlice";

export default function BookPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { data: book, isLoading, isError } = useGetBookPageQuery(id);

  let favoriteBooks = useAppSelector((state) => state.favorite.favoriteBooks);

  let checked = !!favoriteBooks.find((b) => b.id === id);

  const handleCheckBook = (checked: boolean) => {
    if (checked) {
      dispatch(setBookFavorite(book));
    } else {
      dispatch(removeBook({ id: book.id }));
    }
  };

  if (isLoading) {
    return (
      <Typography sx={{ fontSize: 20, textAlign: "center" }}>
        Loading...
      </Typography>
    );
  }

  if (isError) {
    return (
      <>
        <Typography sx={{ fontSize: 20, textAlign: "center", color: "red" }}>
          Something went wrong
        </Typography>
      </>
    );
  }

  return (
    <Container sx={{ display: "flex" }}>
      <Box sx={{ height: "90vh", width: 500 }}>
        <img
          src={book?.volumeInfo?.imageLinks?.thumbnail}
          alt="Book"
          style={{ padding: 100, height: 250, width: 200 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "80%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            width: "100%",
            marginTop: 3,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {book?.volumeInfo.title}
        </Typography>

        <Typography sx={{ marginTop: "20px", width: "80%" }}>
          {book?.volumeInfo?.description
            .replaceAll("<p>", "")
            .replaceAll("<b>", "")
            .substring(0, 1200) + " ..."}
        </Typography>
        <Checkbox
          icon={<StarBorderIcon />}
          checkedIcon={<StarIcon />}
          checked={checked}
          onChange={(_, checked) => handleCheckBook(checked)}
          sx={{ position: "absolute", right: -150 }}
        />
      </Box>
    </Container>
  );
}
