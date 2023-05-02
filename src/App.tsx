// Import's
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        {/* <Route Component={} path="" /> */}
        {/* <Route Component={} path="" /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
