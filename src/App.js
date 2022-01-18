import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Nav from "./components/Layout/Nav";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<h1>sssssssss</h1>} />
          <Route exact path="/photos" element={<h1>sadsadasdssssssssss</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
