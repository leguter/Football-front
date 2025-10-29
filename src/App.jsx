import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import GamePage from "./pages/GamePage/GamePage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx"
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
