// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faHome,
//   faHeadphonesSimple,
//   faAddressCard
// } from '@fortawesome/free-solid-svg-icons' 
// import { Link } from 'react-router-dom'


// const sidebarItems = [
//   { icon: faHome, label: "Dashboard", active: true, link: "/dashboard" },
//   { icon: faHeadphonesSimple, label: "Support", active: false, link: "/support" },
//   { icon: faAddressCard, label: "Contact", active: false, link: "/contact" }
// ]

// export default function Sider() {
//   return (
//     <aside className="w-64 h-screen bg-blue-950 text-white p-4">
//       <nav className="space-y-3">
//         {sidebarItems.map((item, index) => (
//           <Link
//             key={index}
//             to={item.link}
//             className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
//               item.active ? "bg-white text-blue-900" : "hover:bg-blue-700"
//             }`}
//           >
//             <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
//             <span>{item.label}</span>
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   )
// }










import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChartBar,
  faFolder,
  faTasks,
  faCalendar,
  faChartPie,
  faCog,
  faUser,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const sidebarItems = [
  { icon: faHome, label: 'Dashbard', link: '/HomeDashboard' },
  { icon: faChartBar, label: 'Containerpage', link: '/Containerpage' },
  { icon: faFolder, label: 'Services', link: '/dashServices' },
  { icon: faTasks, label: 'Contact', link: '/dashContact' },
  { icon: faCalendar, label: 'Testimonial', link: '/dashtestimonial' },
  { icon: faChartPie, label: 'Footer', link: '/dashfooter' },
];

const settingsItems = [
  { icon: faCog, label: 'Settings' },
  { icon: faUser, label: 'Profile' },
  { icon: faQuestionCircle, label: 'Help' },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .sidebar {
          position: fixed;
          top: 64px; /* assuming 4rem (64px) navbar */
          left: 0;
          width: 256px;
          height: calc(100vh - 64px);
          background-color: #1e3a8a;
          padding: 16px;
          overflow-y: auto;
          color: white;
        }

        .menu-item, .settings-item {
          display: flex;
          align-items: center;
          padding: 10px 12px;
          margin-bottom: 8px;
          font-size: 14px;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          color: white;
          transition: 0.3s;
        }

        .menu-item:hover,
        .settings-item:hover {
          background-color: #2563eb;
        }

        .menu-item.active {
          background-color: white;
          color: #1e3a8a;
        }

        .settings-header {
          display: flex;
          align-items: center;
          padding: 10px 12px;
          background-color: white;
          color: #1e3a8a;
          font-weight: bold;
          border-radius: 8px;
          margin-top: 24px;
          text-transform: uppercase;
        }

        .icon {
          margin-right: 10px;
        }
      `}</style>

      <aside className="sidebar">
        <nav>
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`menu-item ${window.location.pathname === item.link ? 'active' : ''}`}
              onClick={() => navigate(item.link)}
            >
              <FontAwesomeIcon icon={item.icon} className="icon" />
              {item.label}
            </div>
          ))}
        </nav>

        <div className="settings-section">
          <div className="settings-header">
            <FontAwesomeIcon icon={faCog} className="icon" />
            Settings
          </div>
          <nav style={{ marginTop: '10px' }}>
            {settingsItems.map((item, index) => (
              <div key={index} className="settings-item">
                <FontAwesomeIcon icon={item.icon} className="icon" />
                {item.label}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
