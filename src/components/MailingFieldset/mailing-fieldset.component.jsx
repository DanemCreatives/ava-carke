import "./mailing-fieldset.style.scss";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import CustomInput from "../../objects/CustomInput/custom-input.object";

function MailingFieldset() {
  return (
    <div className="mailing-fieldset">
      <h3 className="mailing-fieldset__header">Join our mailing list</h3>
      <form className="mailing-fieldset__form">
        <CustomInput
          className="mailing-fieldset__input mailing-fieldset__input--name"
          type="text"
          placeholder="Your name"
          styleType="primary"
        />
        <CustomInput
          className="mailing-fieldset__input mailing-fieldset__input--email"
          type="email"
          placeholder="Your email"
          styleType="primary"
        />
        <CustomButton type="secondary">Join Now</CustomButton>
      </form>
    </div>
  );
}

export default MailingFieldset;
