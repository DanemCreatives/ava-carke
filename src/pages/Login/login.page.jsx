import "./login.style.scss";
import { Navigate } from "react-router-dom";
import AccountArea from "../../components/AccountArea/account-area.component";
import IntroText from "../../components/IntroText/intro-text.component";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import { googleSignIn } from "../../utils/firebase.utils";
import { getAuth } from "firebase/auth";

function Login({ currentUser }) {
  const auth = getAuth();

  return auth.currentUser ? (
    <Navigate to="/" />
  ) : (
    <div className="login page">
      <div>
        <IntroText header="Account Login" />
        <AccountArea>
          <h2>New Customer</h2>
          <p>
            By creating an account you will be able to shop faster, be up to
            date on an order's status, and keep track of the orders you have
            previously made.
          </p>
          <CustomButton type="tertiary" to="/register-account">
            Continue
          </CustomButton>
          <CustomButton type="google" onClick={googleSignIn}>
            Sign in with Google
          </CustomButton>
        </AccountArea>
        <AccountArea form="login" />
      </div>
    </div>
  );
}

export default Login;
