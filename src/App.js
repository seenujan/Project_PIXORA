import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all pages
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Awareness from "./pages/Awareness";
import QuizSelection from "./pages/QuizSelection";
import Quiz from "./pages/Quiz";
import QuizResult from "./pages/QuizResult";
import AnswerReview from "./pages/AnswerReview";
import Missions from "./pages/Missions";
import MissionDetail from "./pages/MissionDetail";
import Volunteering from "./pages/Volunteering";
import CampaignDetail from "./pages/CampaignDetail";
import CampaignConfirm from "./pages/CampaignConfirm";
import BlueImpact from "./pages/BlueImpact";
import ImpactTimeline from "./pages/ImpactTimeline";
import Achievements from "./pages/Achievements";
import VirtualOcean from "./pages/VirtualOcean";
import SpeciesInfo from "./pages/SpeciesInfo";
import UnlockSpecies from "./pages/UnlockSpecies";
import Profile from "./pages/Profile";
import GoalSetting from "./pages/GoalSetting";
import Notifications from "./pages/Notifications";
import NotificationDetail from "./pages/NotificationDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/quiz-selection" element={<QuizSelection />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quiz-result/:id" element={<QuizResult />} />
        <Route path="/answer-review/:id" element={<AnswerReview />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/mission/:id" element={<MissionDetail />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/campaign/:id" element={<CampaignDetail />} />
        <Route path="/campaign-confirm" element={<CampaignConfirm />} />
        <Route path="/blueimpact" element={<BlueImpact />} />
        <Route path="/impact-timeline" element={<ImpactTimeline />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/virtualocean" element={<VirtualOcean />} />
        <Route path="/species/:id" element={<SpeciesInfo />} />
        <Route path="/unlock-species" element={<UnlockSpecies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/goal-setting" element={<GoalSetting />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notification-detail" element={<NotificationDetail />} />
      </Routes>
    </Router>
  );
}
