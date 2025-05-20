import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import CreateItem from "./pages/CreateItem";
import ReadAllItem from "./pages/ReadAllItem";
import ReadOneItem from "./pages/ReadOneItem";
import UpdateItem from "./pages/UpdateItem";
import Page404 from "./pages/Page404";


function App() {
  return (

      <div>
        <Navigation />
        <main>  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/about/" element={<About />} />
          {/* CRUD */}
          <Route path="/createItem/" element={<CreateItem />} />
          <Route path="/readAllItem/" element={<ReadAllItem />} />
          <Route path="/readOneItem/:id/" element={<ReadOneItem />} />
          <Route path="/updateItem/:id/" element={<UpdateItem />} />
          <Route path="/cart" element={<Cart />} />
          {/* 404 Page */}
          <Route path="*" element={<Page404 />} />
        </Routes></main>
        <Footer />
      </div>

  );
}

export default App;
