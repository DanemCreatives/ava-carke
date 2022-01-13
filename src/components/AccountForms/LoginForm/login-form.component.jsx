import { useState } from "react";
import CustomInput from "../../../objects/CustomInput/custom-input.object";
import CustomButton from "../../../objects/CustomButton/custom-button.object";
import "../account-form.style.scss";
import { defaultSignIn } from "../../../utils/firebase.utils";

function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <form
      className="account-form account-form--login"
      onSubmit={(e) => {
        e.preventDefault();
        defaultSignIn(email, password);
      }}
    >
      <fieldset className="account-form__fieldset">
        <legend className="account-form__legend">Returning Customer</legend>
        <div className="account-form__group">
          <label className="account-form__label" htmlFor="email">
            Email *
          </label>
          <CustomInput
            className="account-form__input"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            styleType="secondary"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="account-form__group">
          <label className="account-form__label" htmlFor="password">
            Password *
          </label>
          <CustomInput
            className="account-form__input"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            styleType="secondary"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </fieldset>
      <div className="account-form__submission">
        <CustomButton type="tertiary">Continue</CustomButton>
      </div>
    </form>
  );
}

export default LoginForm;
