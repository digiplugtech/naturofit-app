import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import BookingPage from './pages/BookingPage';
import OnboardingPage from './pages/OnboardingPage';
import LearnMorePage from './pages/LearnMorePage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import PrivacyPage from './pages/PrivacyPage';
import SignupPage from './pages/SignupPage';
import SubscriptionsPage from './pages/SubscriptionsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/join" element={<OnboardingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
