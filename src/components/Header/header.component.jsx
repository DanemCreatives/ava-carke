import "./header.style.scss";
import Logo from "../../assets/img/logo.jpg";
import SearchInput from "../../objects/SearchInput/search-input.object";
import Menu from "../Menu/menu.component";
import MainMenu from "../MainMenu/main-menu.component";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__inner">
        <Link to="/" className="header__canvas">
          <img className="header__img" src={Logo} alt="Ava Clarke" />
        </Link>
        <div className="header__input">
          <SearchInput placeholder="Search product..." />
        </div>
        <div className="header__menu">
          <Menu />
        </div>
      </div>
      <div className="header__sub-nav">
        <MainMenu />
      </div>
    </div>
  );
}

export default Header;
