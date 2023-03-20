import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Books } from "./pages/Books";
import { Publishers } from "./pages/Publishers";
import { PublishersEdition } from "./pages/PublishersEdition";
import { BooksEdition } from "./pages/BooksEdition";

function App() {
  return (
    <div >
  <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route
              path="/livros"
              element={<Books />}
            />
            <Route
              path="/editoras"
              element={<Publishers />}
            />
            <Route
              path="/editarEditora"
              element={<PublishersEdition/>}
            />
            <Route
              path="/editarLivro"
              element={<BooksEdition/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
