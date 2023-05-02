// Import's
import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import indonesianFlagIcon from "../../assets/indonesian-icon.png";

const Header = () => {
  return (
    <header className={s.headerContainer}>
      <h1 className={s.headerLogo}>Travelaja</h1>
      <nav className={s.headerNavbar}>
        <Link className={s.headerLink} to="/">
          Home
        </Link>
        <Link className={s.headerLink} to="/discover">
          Discover
        </Link>
        <Link className={s.headerLink} to="/services">
          Services
        </Link>
        <Link className={s.headerLink} to="/news">
          News
        </Link>
        <Link className={s.headerLink} to="/about">
          About Us
        </Link>
        <Link className={s.headerLink} to="/contact">
          Contact
        </Link>
      </nav>
      <div className={s.headerLang}>
        <img src={indonesianFlagIcon} alt="" />
        <select>
          <option value="ID">ID</option>
          <option value="PT-BR">PT-BR</option>
          <option value="PT">PT</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
