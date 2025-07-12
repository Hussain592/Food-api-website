export default function Dashboard() {
  return (
    <>
      <style>
        {`
        .main {
          margin-left: 16rem;
          padding-top: 4rem;
          padding: 24px;
          background-color: #f9fafb;
          min-height: 100vh;
          font-family: sans-serif;
        }
        .page-header {
          margin-bottom: 24px;
        }
        .page-title {
          font-size: 24px;
          font-weight: bold;
          color: #111827;
        }
        .page-subtitle {
          margin-top: 4px;
          font-size: 14px;
          color: #6b7280;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-bottom: 24px;
        }
        .stat-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 24px;
        }
        .stat-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .stat-label {
          font-size: 14px;
          color: #6b7280;
        }
        .stat-badge {
          font-size: 12px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 999px;
        }
        .green { background: #ecfdf5; color: #10b981; }
        .blue { background: #eff6ff; color: #3b82f6; }
        .purple { background: #f5f3ff; color: #8b5cf6; }
        .yellow { background: #fefce8; color: #f59e0b; }
        .stat-value {
          font-size: 24px;
          font-weight: bold;
          color: #111827;
        }
        .stat-description {
          font-size: 14px;
          color: #6b7280;
          margin-top: 4px;
        }
        .activity {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 24px;
        }
        .activity h2 {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 16px;
        }
        .activity-item {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
        }
        .activity-item img {
          width: 40px;
          height: 40px;
          border-radius: 8px;
        }
        .activity-meta {
          font-size: 14px;
          color: #6b7280;
        }
        `}
      </style>

      <main className="main">
        <div className="page-header">
          <h1 className="page-title">Dashboard Overview</h1>
          <p className="page-subtitle">
            Welcome back! Here what's happening with your projects today.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-header">
              <h3 className="stat-label">Total Revenue</h3>
              <span className="stat-badge green">+14%</span>
            </div>
            <p className="stat-value">$45,231</p>
            <p className="stat-description">Compared to $39,452 last month</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3 className="stat-label">Active Projects</h3>
              <span className="stat-badge blue">+7</span>
            </div>
            <p className="stat-value">34</p>
            <p className="stat-description">Across 12 different teams</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3 className="stat-label">Team Members</h3>
              <span className="stat-badge purple">+12</span>
            </div>
            <p className="stat-value">245</p>
            <p className="stat-description">Active members this month</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <h3 className="stat-label">Tasks Completed</h3>
              <span className="stat-badge yellow">89%</span>
            </div>
            <p className="stat-value">892</p>
            <p className="stat-description">Out of 1,003 total tasks</p>
          </div>
        </div>

        <div className="activity">
          <h2>Recent Activity</h2>

          <div className="activity-item">
            <img src="https://ui-avatars.com/api/?name=Alex+Smith" alt="Alex Smith" />
            <div>
              <p><strong>Alex Smith</strong> completed the Dashboard Design task</p>
              <p className="activity-meta">2 hours ago • Design Team</p>
            </div>
          </div>

          <div className="activity-item">
            <img src="https://ui-avatars.com/api/?name=Sarah+Johnson" alt="Sarah Johnson" />
            <div>
              <p><strong>Sarah Johnson</strong> added 4 new tasks to Project Alpha</p>
              <p className="activity-meta">5 hours ago • Development Team</p>
            </div>
          </div>

          <div className="activity-item">
            <img src="https://ui-avatars.com/api/?name=Mike+Wilson" alt="Mike Wilson" />
            <div>
              <p><strong>Mike Wilson</strong> commented on the API documentation</p>
              <p className="activity-meta">8 hours ago • Backend Team</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
