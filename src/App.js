import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Splash / Onboarding
import Splash from "./pages/Splash";

// Auth
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Home / Dashboard
import Home from "./pages/Home";

// Awareness / Quiz
import Awareness from "./pages/Awareness";
import QuizSelection from "./pages/QuizSelection";
import Quiz from "./pages/Quiz";
import QuizResult from "./pages/QuizResult";
import AnswerReview from "./pages/AnswerReview";

// Missions
import Missions from "./pages/Missions";
import MissionDetail from "./pages/MissionDetail";

// Volunteering / Campaigns
import Volunteering from "./pages/Volunteering";
import CampaignDetail from "./pages/CampaignDetail";
import CampaignConfirm from "./pages/CampaignConfirm";

// Personal Impact / Virtual Ocean
import BlueImpact from "./pages/BlueImpact";
import ImpactTimeline from "./pages/ImpactTimeline";
import Achievements from "./pages/Achievements";

// Profile / Settings
import Profile from "./pages/Profile";
import GoalSetting from "./pages/GoalSetting";

// Notifications
import Notifications from "./pages/Notifications";

// Footer
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      {/* Flex container ensures footer stays at the bottom */}
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        
        {/* Page content grows to push footer down */}
        <div style={{ flex: 1 }}>
          <Routes>
            {/* Splash / Onboarding */}
            <Route path="/" element={<Splash />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Home / Dashboard */}
            <Route path="/home" element={<Home />} />

            {/* Awareness & Quiz */}
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/quiz-selection" element={<QuizSelection />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/quiz-result/:id" element={<QuizResult />} />
            <Route path="/answer-review/:id" element={<AnswerReview />} />

            {/* Missions */}
            <Route path="/missions" element={<Missions />} />
            <Route path="/mission/:id" element={<MissionDetail />} />

            {/* Volunteering & Campaigns */}
            <Route path="/volunteering" element={<Volunteering />} />
            <Route path="/campaign/:id" element={<CampaignDetail />} />
            <Route path="/campaign-confirm" element={<CampaignConfirm />} />

            {/* Personal Impact / Virtual Ocean */}
            <Route path="/blueimpact" element={<BlueImpact />} />
            <Route path="/impact-timeline" element={<ImpactTimeline />} />
            <Route path="/achievements" element={<Achievements />} />


            {/* Profile / Settings */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/goal-setting" element={<GoalSetting />} />

            {/* Notifications */}
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>

        {/* Footer fills full width below content */}
        <Footer />
      </div>
    </Router>
  );
}
