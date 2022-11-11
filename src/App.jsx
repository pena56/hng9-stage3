import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NFTs from "./pages/NFTs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nfts" element={<NFTs />} />
    </Routes>
  );
}

export default App;
