import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import GamePage from "./pages/GamePage/GamePage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx"
// import Navbar from "./components/Navbar.jsx";
import { AnimatePresence } from 'framer-motion';
import Header from "./components/Header/Header.jsx";

export default function App() {
  return  (
    <BrowserRouter>
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
