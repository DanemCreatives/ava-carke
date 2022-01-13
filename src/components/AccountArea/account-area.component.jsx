import "./account-area.style.scss";
import RegisterAccountForm from "../AccountForms/RegisterAccountForm/register-account-form.component";
import LoginForm from "../AccountForms/LoginForm/login-form.component";

function AccountArea({ form, children }) {
  return (
    <div className="account-area">
      {children && <div className="account-area__copy">{children}</div>}
      {form === "login" && <LoginForm />}
      {form === "register" && <RegisterAccountForm />}
    </div>
  );
}

export default AccountArea;
