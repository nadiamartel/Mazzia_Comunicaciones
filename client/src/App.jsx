import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import InternetView from "./components/InternetView/InternetView";
import EmpresasView from "./components/EmpresasView/EmpresasView";
import ContactoView from "./components/ContactoView/ContactoView";
import Login from "./components/Login/Login";
import AdminPanel from "./components/AdminPanel/AdminPanel";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<InternetView />} />
        <Route path="/empresas" element={<EmpresasView />} />
        <Route path="/contacto" element={<ContactoView />} />
        <Route path="/admin" element={<AdminPanel/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
