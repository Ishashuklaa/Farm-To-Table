// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import { FaUser, FaCog, FaClipboardList, FaSignOutAlt, FaCarrot, FaSeedling, FaTractor, FaAppleAlt, FaPiggyBank } from 'react-icons/fa';
import carrotImage from './carrot.jpg';
import watermelonImage from './watermelon.jpg';
import custardapple from './custardapple.jpg';
import pomegranateImage from './pomegranate.jpg';
import cornImage from './corn.jpg';
import cherryImage from './cherry.jpg';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Side menu */}
      <div className={`side-menu ${isSidebarOpen ? 'open' : 'closed'}`}>
        <ul>
          <li><a href="/profile"><FaUser /> Profile</a></li>
          <li><a href="/settings"><FaCog /> Settings</a></li>
          <li><a href="/orders"><FaClipboardList /> Orders</a></li>
          <li><a href="/logout"><FaSignOutAlt /> Logout</a></li>
          <li><a href="/farm-listings"><FaSeedling /> Farm Listings</a></li>
          <li><a href="/market-overview"><FaCarrot /> Market Overview</a></li>
          <li><a href="/suppliers"><FaTractor /> Suppliers</a></li>
          <li><a href="/farmers"><FaAppleAlt /> Farmers</a></li>
          <li><a href="/finances"><FaPiggyBank /> Finances</a></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="dashboard-content">
        <h1>Welcome to Dashboard!</h1>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>

        {/* Dashboard Overview */}
        <section className="dashboard-overview">
  <h2>Dashboard Overview</h2>
  <p>Get a quick view of your progress and activities.</p>
  <div className="overview-stats">
    <div className="stat-card">
      <h3>Total Sales</h3>
      <p>5000</p> {/* Example value for Total Sales */}
    </div>
    <div className="stat-card">
      <h3>Total Feedbacks</h3>
      <p>45</p> {/* Example value for Total Feedbacks */}
    </div>
    <div className="stat-card">
      <h3>Active Listings</h3>
      <p>13</p> {/* Example value for Active Listings */}
    </div>
  </div>
</section>



        {/* Products Section */}
        <div className="products-row">
          <section className="recent-viewed-products">
            <h2>Recently Viewed Products</h2>
            <ul>
              <li><img src={watermelonImage} alt="Watermelons" className="product-image" /> Watermelons</li>
              <li><img src={carrotImage} alt="Organic Carrots" className="product-image" /> Organic Carrots</li>
              <li><img src={cherryImage} alt="Fresh Cherry" className="product-image" /> Fresh Cherry</li>
            </ul>
          </section>

          <section className="top-selling-products">
            <h2>Top Selling Products</h2>
            <ul>
              <li><img src={cornImage} alt="Corn" className="product-image" /> Corn</li>
              <li><img src={pomegranateImage} alt="Pomegranate" className="product-image" /> Pomegranate - Sourced from Tropical Farms</li>
              <li><img src={custardapple} alt="Custard Apple" className="product-image" /> Custard Apple</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
