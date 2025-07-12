import React from "react";

export default function Navbar() {
  return (
    <>
      <style>
        {`
          .navbar {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            height: 64px;
            background-color: #1e3a8a; /* blue-950 */
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            border-bottom: 1px solid white;
            z-index: 50;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          .navbar-logo {
            display: flex;
            align-items: center;
          }
          .logo-box {
            height: 36px;
            width: 36px;
            background: white;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .logo-box span {
            color: #1e3a8a;
            font-size: 20px;
            font-weight: bold;
          }
          .brand-name {
            margin-left: 12px;
            font-size: 20px;
            font-weight: 600;
            color: white;
          }
          .navbar-right {
            display: flex;
            align-items: center;
            gap: 24px;
          }
          .search-box {
            position: relative;
          }
          .search-box input {
            width: 250px;
            padding: 8px 12px 8px 36px;
            font-size: 14px;
            color: #111827;
            background: white;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
          }
          .search-box i {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            color: #9ca3af;
          }
          .icon-button {
            position: relative;
            padding: 8px;
            color: white;
            font-size: 20px;
            cursor: pointer;
            transition: color 0.3s;
          }
          .icon-button:hover {
            color: #d1d5db;
          }
          .notification-dot {
            position: absolute;
            top: 6px;
            right: 6px;
            width: 8px;
            height: 8px;
            background: red;
            border-radius: 9999px;
          }
          .profile {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .profile img {
            width: 36px;
            height: 36px;
            border-radius: 12px;
          }
          .profile-info {
            display: none;
          }
          @media (min-width: 768px) {
            .profile-info {
              display: block;
              margin-top: 4px;
            }
            .search-box {
              display: block;
            }
          }
          .profile-info p {
            margin: 0;
            color: white;
            font-size: 14px;
            font-weight: 500;
          }
          .profile-info span {
            font-size: 12px;
            color: #e5e7eb;
          }
        `}
      </style>

      <nav className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo">
          <div className="logo-box">
            <span>H</span>
          </div>
          <span className="brand-name">Hussain</span>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          {/* Search */}
          <div className="search-box">
            <input type="search" placeholder="Search..." />
            <i className="fas fa-search"></i>
          </div>

          {/* Notifications */}
          <div className="icon-button">
            <i className="fas fa-bell"></i>
            <span className="notification-dot"></span>
          </div>

          {/* Profile */}
          <div className="profile">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff"
              alt="Profile"
            />
            <div className="profile-info">
              <p>John Doe</p>
              <span>Administrator</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
