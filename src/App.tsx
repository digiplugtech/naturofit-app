import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import BookingPage from './pages/BookingPage';
import OnboardingPage from './pages/OnboardingPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          {/* Aliases */}
          <Route path="/join" element={<OnboardingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
