import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const highlights = [
  { label: 'Workouts logged', value: '128' },
  { label: 'Teams active', value: '12' },
  { label: 'Streak days', value: '19' },
]

const workflowCards = [
  {
    title: 'Activity logging',
    description: 'Track workouts, sets, and progress with an API-first data model.',
  },
  {
    title: 'Teams and leaderboards',
    description: 'Compare progress across squads with shared goals and rankings.',
  },
  {
    title: 'Workout suggestions',
    description: 'Surface personalized recommendations from the backend service.',
  },
]

function Shell() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container-fluid px-4 px-lg-5 py-3 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
          <NavLink className="brand" to="/">
            <img
              src="/octofitapp-small.png"
              alt="OctoFit Tracker logo"
              className="brand-logo"
            />
            <div>
              <div className="brand-name">OctoFit Tracker</div>
              <div className="brand-tag">Modern multi-tier fitness platform</div>
            </div>
          </NavLink>

          <nav className="nav nav-pills nav-fill gap-2">
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">
              Overview
            </NavLink>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/activities">
              Activities
            </NavLink>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/teams">
              Teams
            </NavLink>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/leaderboard">
              Leaderboard
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container-fluid px-4 px-lg-5 py-4 py-lg-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<FeaturePage title="Activities" />} />
          <Route path="/teams" element={<FeaturePage title="Teams" />} />
          <Route path="/leaderboard" element={<FeaturePage title="Leaderboard" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="dashboard-grid">
      <section className="hero-card card border-0 shadow-lg overflow-hidden">
        <div className="card-body p-4 p-lg-5">
          <span className="eyebrow">React 19 · Vite · Express · MongoDB</span>
          <h1 className="display-5 fw-semibold mt-3 mb-3">Track training, teams, and progress in one place.</h1>
          <p className="lead text-secondary mb-4">
            This starter gives the frontend, API, and data tier a shared foundation for
            authentication, activity tracking, team play, and personalized coaching.
          </p>

          <div className="d-flex flex-wrap gap-3">
            <button className="btn btn-primary btn-lg" type="button">
              Start a workout
            </button>
            <button className="btn btn-outline-light btn-lg" type="button">
              View leaderboard
            </button>
          </div>
        </div>
      </section>

      <section className="metrics-grid">
        {highlights.map((highlight) => (
          <article className="metric-card card border-0 shadow-sm" key={highlight.label}>
            <div className="card-body p-4">
              <div className="metric-value">{highlight.value}</div>
              <div className="metric-label">{highlight.label}</div>
            </div>
          </article>
        ))}
      </section>

      <section className="feature-grid">
        {workflowCards.map((card) => (
          <article className="card feature-card border-0 shadow-sm" key={card.title}>
            <div className="card-body p-4 p-lg-4">
              <h2 className="h4 mb-3">{card.title}</h2>
              <p className="text-secondary mb-0">{card.description}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

function FeaturePage({ title }) {
  return (
    <section className="card border-0 shadow-lg feature-page">
      <div className="card-body p-4 p-lg-5">
        <span className="eyebrow">Coming next</span>
        <h1 className="display-6 fw-semibold mt-3 mb-3">{title}</h1>
        <p className="text-secondary mb-0">
          This route is ready for API-backed screens, forms, and data tables.
        </p>
      </div>
    </section>
  )
}

function App() {
  return (
    <Shell />
  )
}

export default App
