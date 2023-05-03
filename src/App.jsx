import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import NewWomanPage from "./pages/NewWomanPage"
import SundaysPage from "./pages/SundaysPage"
import TheHuntPage from "./pages/TheHunt"
import Footer from "./components/Footer"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <div className="App bg-bg text-text">
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
        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
