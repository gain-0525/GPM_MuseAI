import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import MainPage from "./pages/MainPage";
import Guide from "./pages/Guide";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import MissionIntro from "./pages/MissionIntro";
import MissionGuide from "./pages/MissionGuide";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 처음 접속하면 미션 랜딩 */}
        <Route path="/" element={<MissionIntro />} />

        {/* 미션 */}
        <Route path="/mission/guide" element={<MissionGuide />} />

        {/* 기존 홈 */}
        <Route element={<HomeLayout />}>
          <Route path="/home" element={<MainPage />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
