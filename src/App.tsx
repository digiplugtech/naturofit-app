import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import BookingPage from './pages/BookingPage';
import OnboardingPage from './pages/OnboardingPage';
// Import the new page
import LearnMorePage from './pages/LearnMorePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          {/* Aliases */}
          <Route path="/about" element={<LearnMorePage />} />
          <Route path="/join" element={<OnboardingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
