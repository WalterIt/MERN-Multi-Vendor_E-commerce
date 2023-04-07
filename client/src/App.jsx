// import.meta.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/auth/LoginPage";
import "./App.css";
import SignupPage from "./pages/auth/SignupPage";
import HomePage from "./pages/HomePage";
import BestSellingPage from "./pages/BestSellingPage";
import ActivationPage from "./pages/ActivationPage";
import ProductsPage from "./pages/ProductsPage";
import EventsPage from "./pages/EventsPage";
import FAQPage from "./pages/FAQPage";
import Layout from "./pages/Layout";
import axios from "axios";
import { useEffect } from "react";
import store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";

axios.defaults.withCredentials = true;

function App() {
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      {loading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route
              path="/activation/:activation_token"
              element={<ActivationPage />}
            />
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/best-selling" element={<BestSellingPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Route>
          </Routes>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
