import React from "react";
import FeaturesHero from "../components/features/FeaturesHero";
import FeaturesOverview from "../components/features/FeaturesOverview";
import CoreModules from "../components/features/CoreModules";
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
import Comparison from "../components/features/Comparison";
import FAQ from "../components/features/FAQ";
import CTA from "../components/features/CTA";

/**
 * Displays the features page.
 *
 * @returns {JSX.Element}
 */
function Features() {
  return (
    <main>
      <FeaturesHero />
      <FeaturesOverview />
      <CoreModules />
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
      <Comparison />
      <FAQ />
      <CTA />
    </main>
  );
}

export default Features;
