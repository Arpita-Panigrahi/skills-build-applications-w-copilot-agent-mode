import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">🐙 OctoFit Tracker</a>
        </div>
      </nav>
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome to OctoFit Tracker</h1>
      <p className="lead">Track your fitness journey and compete with friends!</p>
      <hr className="my-4" />
      <p>Start your fitness adventure today.</p>
    </div>
  )
}

export default App
