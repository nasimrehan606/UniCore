import React from "react";
import Navbar from "../components/layout/Navbar";
import FeaturesHero from "../components/features/FeaturesHero";
import FeaturesOverview from "../components/features/FeaturesOverview";
import DailyPlanner from "../components/features/DailyPlanner";
import TaskManager from "../components/features/TaskManager";
import HabitTracker from "../components/features/HabitTracker";
import GoalManager from "../components/features/GoalManager";
import Pomodoro from "../components/features/Pomodoro";
import Journal from "../components/features/Journal";
import MoodTracker from "../components/features/MoodTracker";
import Calendar from "../components/features/Calendar";
import Analytics from "../components/features/Analytics";
import Achievements from "../components/features/Achievements";
import WhyChoose from "../components/features/WhyChoose";
import FAQPreview from "../components/about/FAQPreview";
import CTA from "../components/about/CTA";
import Footer from "../components/home/Footer";

/**
 * Displays the features page.
 *
 * @returns {JSX.Element}
 */
function Features() {
  return (
    <main>
      <Navbar />
      <FeaturesHero />
      <FeaturesOverview />
      <DailyPlanner />
      <TaskManager />
      <HabitTracker />
      <GoalManager />
      <Pomodoro />
      <Journal />
      <MoodTracker />
      <Calendar />
      <Analytics />
      <Achievements />
      <WhyChoose />
      <FAQPreview/>
      <CTA />
      <Footer />
    </main>
  );
}

export default Features;
