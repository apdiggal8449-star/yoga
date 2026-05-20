import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Nabvar";

import HomeServises from "./services/HomeService";
import Corporate from "./services/Corporate";
import Pragnancy from "./services/Pragnancy";
import Stresh from "./services/Stresh";
import Maditation from "./services/Maditation";
import Online from "./services/OnlineService";

import { Home } from "./pages/Home";
import About from "./pages/About";
import WriteUs from "./pages/WriteUs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blogs";

import DashBoard from "./admin/DashBoard";
import Login from "./admin/Login";
import Create from "./admin/Create";
import Update from "./admin/Update";

import Noida from "./calsses/Noida";
import Delhi from "./calsses/Delhi";
import Gaziabad from "./calsses/Gaziabad";
import GreaterNoida from "./calsses/GreaterNoida";
import Faridabad from "./calsses/Faridabad";
import Gurgaon from "./calsses/Gurgaon";

function App() {

  return (

    <BrowserRouter>

      {/* COMMON NAVBAR */}
      <Navbar />

      <Routes>

        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/writeus" element={<WriteUs />} />

        {/* SERVICES */}
        <Route path="/homeyoga" element={<HomeServises />} />

        <Route path="/onlineyoga" element={<Online />} />

        <Route path="/corporateyoga" element={<Corporate />} />

        <Route path="/pragnancyyoga" element={<Pragnancy />} />

        <Route path="/stressyoga" element={<Stresh />} />

        <Route path="/meditationyoga" element={<Maditation />} />

        {/* CITY CLASSES */}
        <Route path="/yoga-classes-noida" element={<Noida />} />

        <Route path="/yoga-classes-delhi" element={<Delhi />} />

        <Route path="/yoga-classes-ghaziabad" element={<Gaziabad />} />

        <Route
          path="/yoga-classes-greater-noida"
          element={<GreaterNoida />}
        />

        <Route
          path="/yoga-classes-faridabad"
          element={<Faridabad />}
        />

        <Route
          path="/yoga-classes-gurgaon"
          element={<Gurgaon />}
        />

        {/* ADMIN */}
        <Route path="/admindashboard" element={<DashBoard />} />

        <Route path="/admin-login" element={<Login />} />

        <Route path="/admin-create" element={<Create />} />

        <Route path="/admin-update" element={<Update />} />

      </Routes>

      {/* COMMON FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;