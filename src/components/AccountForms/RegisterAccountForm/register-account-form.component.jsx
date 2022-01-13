import { useState } from "react";
import "../account-form.style.scss";
import CustomInput from "../../../objects/CustomInput/custom-input.object";
import CustomButton from "../../../objects/CustomButton/custom-button.object";
import { defaultSignUp } from "../../../utils/firebase.utils";

function RegisterAccountForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [privacyStatement, setPrivacyStatement] = useState(false);

  return (
    <form
      className="account-form account-form--register"
      onSubmit={(e) => {
        e.preventDefault();
        defaultSignUp(
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          telephone,
          privacyStatement
        );
      }}
    >
      <fieldset className="account-form__fieldset">
        <legend className="account-form__legend">Your Personal Details</legend>
        <div className="account-form__group">
          <label className="account-form__label" htmlFor="first-name">
            First Name *
          </label>
          <CustomInput
            className="account-form__input"
            type="text"
            placeholder="First Name"
            id="first-name"
            name="first-name"
            styleType="secondary"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="account-form__group">
          <label className="account-form__label" htmlFor="last-name">
            Last Name *
          </label>
          <CustomInput
            className="account-form__input"
            type="text"
            placeholder="Last Name"
            id="last-name"
            name="last-name"
            styleType="secondary"
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
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
          <label className="account-form__label" htmlFor="tel">
            Telephone
          </label>
          <CustomInput
            className="account-form__input"
            type="tel"
            placeholder="Telephone"
            id="telephone"
            name="telephone"
            styleType="secondary"
            onChange={(e) => {
              setTelephone(e.target.value);
            }}
          />
        </div>
      </fieldset>
      <fieldset className="account-form__fieldset">
        <legend className="account-form__legend">Your Password</legend>
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
        <div className="account-form__group">
          <label className="account-form__label" htmlFor="confirm-password">
            Confirm Password *
          </label>
          <CustomInput
            className="account-form__input"
            type="password"
            placeholder="Confirm Password"
            id="confirm-password"
            name="confirm-password"
            styleType="secondary"
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
      </fieldset>
      <div className="account-form__legal">
        <input
          className="account-form__checkbox"
          type="checkbox"
          id="statement"
          onChange={(e) => {
            setPrivacyStatement(true);
          }}
        />
        <label className="account-form__text" htmlFor="statement">
          I have read and agree to the Privacy Statement
        </label>
      </div>
      <div className="account-form__submission">
        <CustomButton type="tertiary">Continue</CustomButton>
      </div>
    </form>
  );
}

export default RegisterAccountForm;
