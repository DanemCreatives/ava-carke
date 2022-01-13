import "./user-notification.style.scss";
import { connect } from "react-redux";
import IntroText from "../../components/IntroText/intro-text.component";

function UserNotification({ currentUser }) {
  let header;
  let body;
  if (!currentUser) {
    header = "User Logout Successful";
    body =
      "You have been logged off your account. Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.";
  }
  return (
    <div className="user-notification page">
      <IntroText header={header}>{body}</IntroText>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(UserNotification);
