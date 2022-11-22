import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import Registration from "./components/registration";
import Watches from "./components/watches";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="sign" element={<Registration />} />
      <Route path="category/watches" element={<Watches />} />
    </Routes>
  );
}
export default App;
