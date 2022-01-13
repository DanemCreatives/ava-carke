import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth } from "firebase/auth";
import { setCurrentUser } from "./redux/user/user.action";
import Header from "./components/Header/header.component";
import HomePage from "./pages/HomePage/home-page.page";
import ProductsPage from "./pages/Products/products.page";
import Login from "./pages/Login/login.page";
import RegisterAccount from "./pages/RegisterAccount/register-account.page";
import Footer from "./components/Footer/footer.component";
import UserNotification from "./pages/UserNotification/user-notification.page";

function App({ currentUser, setCurrentUser }) {
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

// get from top level
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// import from actions
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
