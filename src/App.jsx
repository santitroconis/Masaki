import "./App.css";
import HeaderLogo from "./assets/images/logo-white.png";
import MagazineRow from "./components/MagazineRow";

export default function App() {
  return (
    <div className="main-container">
      <div className="header-container">
        <img className="header-logo" src={HeaderLogo} alt="Masaki Logo" />
      </div>
      <div className="nav-container">
        <input className="search-bar" type="text" />
      </div>
      <div className="content-container">
        <div className="sidebar-container">{/* <Options categories /> */}</div>
        <div className="preview-magazine-container">
          <MagazineRow category={"science"} />
          <MagazineRow category={"coding"} />
          <MagazineRow category={"mechanic"} />
        </div>
      </div>
    </div>
  );
}
