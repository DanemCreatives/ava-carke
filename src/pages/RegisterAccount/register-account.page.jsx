import "./register-account.style.scss";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import IntroText from "../../components/IntroText/intro-text.component";
import AccountArea from "../../components/AccountArea/account-area.component";

function RegisterAccount({ user }) {
  return user ? (
    <Navigate to="/" />
  ) : (
    <div className="register-account page">
      <IntroText header="Register Account">
        If you already have an account with us, please login at the login page.
      </IntroText>
      <AccountArea form="register" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(RegisterAccount);
