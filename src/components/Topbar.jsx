import "./Topbar.css";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

function Topbar({ setSidebarOpen }) {
  return (
    <header className="topbar">

      <div className="topbar-left">

        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>

        <div className="welcome">

          <h2>
            Welcome Back
            <span className="wave"> 👋</span>
          </h2>

          <p>
            Manage your finances with confidence.
          </p>

        </div>

      </div>

      <div className="topbar-right">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

        <button className="icon-btn">
          <FaBell />
        </button>

        <button className="icon-btn">
          <FaUserCircle />
        </button>

      </div>

    </header>
  );
}

export default Topbar;