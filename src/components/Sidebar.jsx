import "./Sidebar.css";
import {
  FaHome,
  FaWallet,
  FaChartPie,
  FaMoneyBillWave,
  FaFileInvoice,
  FaCog,
  FaQuestionCircle,
  FaTimes,
} from "react-icons/fa";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>

      {/* Overlay */}

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        ></div>
      )}

      <aside
        className={`sidebar ${
          sidebarOpen ? "show" : ""
        }`}
      >

        {/* Close Button (Mobile) */}

        <button
          className="close-sidebar"
          onClick={() =>
            setSidebarOpen(false)
          }
        >
          <FaTimes />
        </button>

        {/* Logo */}

        <div className="logo">

          <div className="logo-icon">
            💰
          </div>

          <div>
            <h2>FinTrack</h2>
            <p>Finance Dashboard</p>
          </div>

        </div>

        {/* Main */}

        <div className="menu-section">

          <span className="menu-title">
            MAIN
          </span>

          <a
            href="#"
            className="active"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <FaHome />
            Dashboard
          </a>

          <a
            href="#"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <FaMoneyBillWave />
            Transactions
          </a>

          <a
            href="#"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <FaChartPie />
            Analytics
          </a>

          <a
            href="#"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <FaWallet />
            Budget
          </a>

          <a
            href="#"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <FaFileInvoice />
            Reports
          </a>

        </div>

        {/* Preferences */}

        <div className="menu-section">

          <span className="menu-title">
            PREFERENCES
          </span>

          <a
            href="#"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <FaCog />
            Settings
          </a>

          <a
            href="#"
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <FaQuestionCircle />
            Help
          </a>

        </div>

        {/* Profile */}

        <div className="profile-card">

          <div className="avatar">
            S
          </div>

          <div>

            <h4>Sravani</h4>

            <p>Finance Dashboard</p>

          </div>

        </div>

      </aside>

    </>
  );
}

export default Sidebar;