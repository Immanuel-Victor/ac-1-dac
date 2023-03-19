import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Books } from "./pages/Books";
import { Publishers } from "./pages/Publishers";

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
