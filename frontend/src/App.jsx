import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Nabvar";

import { Home } from "./pages/Home";
import About from "./pages/About";
import WriteUs from "./pages/WriteUs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blogs";

import Noida from "./classes/Noida";
import Create from "./admin/Create"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <Create />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/writeus" element={<WriteUs />} />

        <Route path="/noida" element={<Noida />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;