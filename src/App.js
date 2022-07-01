import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Details";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/details" element={<Detail/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;