import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <main className="mobile-container">

          <Routes>

            <Route path="/" element={<Welcome />} />

            <Route path="/home" element={<Home />} />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;