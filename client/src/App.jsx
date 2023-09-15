import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import InternetView from "./components/InternetView/InternetView";
import EmpresasView from "./components/EmpresasView/EmpresasView";
import ContactoView from "./components/ContactoView/ContactoView";
import Loader from "./components/loader/Loader";
import { Suspense, lazy } from "react";

const Login = lazy(() => import("./components/Login/Login"));
const AdminPanel = lazy(() => import("./components/AdminPanel/AdminPanel"));

// import Login from "./components/Login/Login";
// import AdminPanel from "./components/AdminPanel/AdminPanel";

function App() {
  return (
    <>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<InternetView />} />
          <Route path="/empresas" element={<EmpresasView />} />
          <Route path="/contacto" element={<ContactoView />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
