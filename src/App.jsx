import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Places from "./pages/Places";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/places" element={<Places />} />
    </Routes>
  );
}

export default App;
