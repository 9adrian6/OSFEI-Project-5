import { Card } from "@mui/joy";
import { Typography, CardContent, Box } from "@mui/material";
import styled from "styled-components";
import { Book } from "../interfaces/bookInterface";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import StyledLink from "../styled";
import Checkbox from "@mui/material/Checkbox";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useCallback } from "react";
import { removeBook, setBookFavorite } from "../store/favoriteSlice";

const StyledCard = styled(Card)`
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: 10px;
  box-shadow: 0 5px 5px rgba(212, 185, 150, 0.5);
  transition: 0.5s;
  text-align: center;
  display: "flex";
  flexdirection: "column";
  height: 500px;
`;

interface BookProps {
  book: Book;
}

const BookCard: React.FC<BookProps> = ({ book }) => {
  const dispatch = useAppDispatch();

  let favoriteBooks = useAppSelector((state) => state.favorite.favoriteBooks);

  const checked = !!favoriteBooks.find((b) => b.id === book.id);

  const handleCheckBook = useCallback(
    (checked: boolean) => {
      if (checked) {
        dispatch(setBookFavorite(book));
      } else {
        dispatch(removeBook({ id: book.id }));
      }
    },
    [book, dispatch]
  );

  const Image = () =>
    book?.volumeInfo?.imageLinks?.thumbnail ? (
      <img
        src={book?.volumeInfo?.imageLinks?.thumbnail}
        alt={book?.volumeInfo?.title}
        style={{ width: "150px", height: "200px" }}
      />
    ) : (
      <div
        style={{
          width: "150px",
          height: "200px",
          background: "#ededed",
          margin: "0 auto",
        }}
      ></div>
    );

  return (
    <StyledCard>
      <CardContent sx={{ height: "400px" }}>
        <Typography variant="h6" component="div" sx={{ marginBottom: "20px" }}>
          {book.volumeInfo.title.length < 25
            ? book.volumeInfo.title
            : book.volumeInfo.title.substring(0, 25) + " ..."}
        </Typography>
        <StyledLink to={`/book/${book.id}`}>
          <Image />
        </StyledLink>

        <Typography sx={{ marginTop: "20px" }}>
          {(book?.volumeInfo?.description?.substring(0, 150) ??
            "No description") + " ..."}
        </Typography>
      </CardContent>
      <Box>
        <Checkbox
          icon={<StarBorderIcon />}
          checkedIcon={<StarIcon />}
          checked={checked}
          onChange={(_, checked) => handleCheckBook(checked)}
        />
      </Box>
    </StyledCard>
  );
};

export default BookCard;
