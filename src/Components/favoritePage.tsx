import Grid from "@mui/material/Grid";
import { Typography, CardContent, Button, Box, Card } from "@mui/material";
import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";
import { removeBook } from "../store/favoriteSlice";

function FavoritePage() {
  const favorite = useAppSelector((state) => state.favorite.favoriteBooks);

  const dispatch = useAppDispatch();

  if (favorite.length === 0) {
    return (
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ width: "100%", textAlign: "center", marginTop: 2 }}
      >
        No Favorite Books
      </Typography>
    );
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 9, lg: 12, xl: 12 }}
        >
          {favorite.map((book) => (
            <Grid item xs={4} sm={4} md={3} key={book.id}>
              <Card
                sx={{
                  height: "450px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    {book?.volumeInfo?.title}
                  </Typography>

                  {book?.volumeInfo?.imageLinks?.thumbnail ? (
                    <img
                      src={book?.volumeInfo?.imageLinks?.thumbnail}
                      alt={book?.volumeInfo?.title}
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
                  )}

                  <Typography sx={{ marginTop: "20px" }}>
                    {book?.volumeInfo?.description
                      ?.replaceAll("<p>", "")
                      .replaceAll("<b>", "")
                      .substring(0, 150) + " ..."}
                  </Typography>
                </CardContent>
                <Button onClick={() => dispatch(removeBook({ id: book.id }))}>
                  Remove Book
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default FavoritePage;
