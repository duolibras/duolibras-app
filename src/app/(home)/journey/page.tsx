import { BottomTab } from "../components/bottom-tab";
import { JourneyHeader } from "../components/journey-header";
import { TrailContent } from "./trail-content";

export default function TrailPage() {
  return (
    <div>
      <JourneyHeader />
      <TrailContent />
      <BottomTab />
    </div>
  );
}