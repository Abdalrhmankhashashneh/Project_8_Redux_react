import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Editpost from "./components/admin/Editpost";
import Addpost from "./components/admin/Addpost";
import Login from "./components/login";
import { useSelector } from "react-redux";
function App() {
  const isloggin = useSelector((state) => state.isloggin);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={isloggin ? <Admin /> : <Login />} />
          <Route path="/admin/edit" element={isloggin ? <Editpost /> : <Login />} />
          <Route path="/admin/add" element={isloggin ? <Addpost /> : <Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
