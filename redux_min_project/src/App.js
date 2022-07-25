import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Editpost from "./components/admin/Editpost";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/edit" element={<Editpost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
