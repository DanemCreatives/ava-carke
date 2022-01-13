import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Header from "./components/Header/header.component";
import HomePage from "./pages/HomePage/home-page.page";
import ProductsPage from "./pages/Products/products.page";
import Login from "./pages/Login/login.page";
import RegisterAccount from "./pages/RegisterAccount/register-account.page";
import Footer from "./components/Footer/footer.component";
import UserNotification from "./pages/UserNotification/user-notification.page";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(false);
      }
    });
  }, [setCurrentUser]);

  return (
    currentUser !== null && (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-account" element={<RegisterAccount />} />
          <Route path="/user-notification" element={<UserNotification />} />
        </Routes>
        <Footer />
      </div>
    )
  );
}

export default App;
