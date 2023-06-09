import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/auth/LoginPage";
import "./App.css";
import SignupPage from "./pages/auth/SignupPage";
import HomePage from "./pages/HomePage";
import BestSellingPage from "./pages/BestSellingPage";
import ActivationPage from "./pages/ActivationPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import EventsPage from "./pages/EventsPage";
import FAQPage from "./pages/FAQPage";
import Layout from "./pages/Layout";
import ProfilePage from "./pages/ProfilePage";
import CreateShopPage from "./pages/auth/CreateShopPage";
import LoginShopPage from "./pages/auth/LoginShopPage";
import ShopHomePage from "./pages/shop/ShopHomePage";
import ShopDashboardPage from "./pages/shop/ShopDashboardPage";
import ShopCreateProduct from "./pages/shop/ShopCreateProduct";
import ShopProducts from "./pages/shop/ShopProducts";
import axios from "axios";
import { useSelector } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";

axios.defaults.withCredentials = true;

function App() {
  const { isAuthenticated, loading } = useSelector(
    (state) => state?.user || {}
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/sign-up"
          element={isAuthenticated ? <Navigate to="/" /> : <SignupPage />}
        />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />

        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:name" element={<ProductDetailsPage />} />
          <Route path="/best-selling" element={<BestSellingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* SHOP ROUTES  */}
        <Route path="/create-shop" element={<CreateShopPage />} />
        <Route path="/login-shop" element={<LoginShopPage />} />

        <Route
          path="/dashboard/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        >
          <Route
            path="/dashboard/create-product"
            element={<ShopCreateProduct />}
          />
          <Route path="/dashboard/products" element={<ShopProducts />} />
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
  );
}

export default App;
