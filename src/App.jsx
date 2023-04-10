import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Footer2 from "./components/Footer2"
import NewWomanPage from "./pages/NewWomanPage"
import SundaysPage from "./pages/SundaysPage"
import TheHuntPage from "./pages/TheHunt"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/new-woman"
          element={<NewWomanPage />}
        />
        <Route
          path="/sundays"
          element={<SundaysPage />}
        />
        <Route
          path="/the-hunt"
          element={<TheHuntPage />}
        />
      </Routes>
      <Footer2 />
    </div>
  )
}

export default App
