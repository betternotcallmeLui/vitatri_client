import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LandingPage />} path="/" />
      </Routes>
    </Router>
  )
}

export default App
