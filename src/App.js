import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Favorite from "./components/Favorite/Favorite";
import Home from "./components/Home/Home";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
      <main>
          <NavBar />
          <Container>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/favorite" element={<Favorite />} />
                  <Route path="*" element={<ErrorPage />} />
              </Routes>
          </Container>
      </main>

  );
}

export default App;
