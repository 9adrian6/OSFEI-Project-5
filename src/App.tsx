import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./Components/navBar";
import MainBook from "./Components/mainBooks";
import BookPage from "./Components/bookPage";
import FavoriteSlice from "./Components/favoritePage";

function App() {
  return (
    <div>
      <NavBar />
      <Box>
        <Routes>
          <Route path="/" element={<MainBook />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/favorites" element={<FavoriteSlice />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
