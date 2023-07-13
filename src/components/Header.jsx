import "../styles/header.css";
import searchIcon from "../assets/images/Home/Nav/search-icon.svg";
import logo from "../assets/images/Home/Nav/reddit-logo.svg";
import title from "../assets/images/Home/Nav/reddit-title.svg";
import qr from "../assets/images/Home/Nav/qrcode.svg";
import defaultUser from "../assets/images/Home/Nav/default_user.svg";
import arrow from "../assets/images/Default_Images/arrow-down.svg";

const Header = () => {
  return (
    <nav id="header">
      <div id="logo-area">
        <a className="logo-container" href="/">
          <img src={logo} className="reddit-logo" alt="Reddit Logo"></img>
          <img src={title} className="reddit-title" alt="Reddit Title"></img>
        </a>
      </div>
      <div id="searchbar-container">
        <form id="search-form">
          <label htmlFor="header-search-bar">
            <img src={searchIcon} className="search-icon"></img>
          </label>
          <input
            type="text"
            placeholder="Search Reddit..."
            id="header-search-bar"
          ></input>
        </form>
      </div>
      <div id="account-area">
        <div className="header-buttons">
          <button className="get-app">
            <img src={qr} alt="QR Code Scan" className="qrcode" />
            Get App
          </button>
          <button className="login">Log In</button>
        </div>
        <div className="user-profile">
          <img
            src={defaultUser}
            alt="Icon of a person or user"
            className="default-user"
          />
          <img
            src={arrow}
            alt="Small arrow pointing downwards"
            className="down-arrow"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
