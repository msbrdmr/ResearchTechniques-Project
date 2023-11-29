import HomeLogin from "./pages/HomeLogin";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLogin></HomeLogin>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
