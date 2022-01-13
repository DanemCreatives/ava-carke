import "./dropdown-menu.style.scss";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

function DropdownMenu({ currentUser }) {
  console.log(currentUser);
  const auth = getAuth();

  return (
    <div className="dropdown-menu">
      {currentUser ? (
        <div className="dropdown-menu__inner">
          <Link
            className="dropdown-menu__link dropdown-menu__link--orders"
            to="/my-orders"
          >
            My Orders
          </Link>
          <Link
            className="dropdown-menu__link dropdown-menu__link--logout"
            to="/user-notification"
            onClick={() => signOut(auth)}
          >
            Logout
          </Link>
        </div>
      ) : (
        <div className="dropdown-menu__inner">
          <Link
            className="dropdown-menu__link dropdown-menu__link--login"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="dropdown-menu__link dropdown-menu__link--register"
            to="/register-account"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(DropdownMenu);
