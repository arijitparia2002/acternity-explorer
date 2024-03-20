import { AnimatedTooltipPreview } from "@/components/People";
import { ThreeDCardDemo } from "../components/3DCard";
import {BackgroundBoxesDemo} from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <BackgroundBoxesDemo />
      <ThreeDCardDemo />
      <AnimatedTooltipPreview />
    </div>
  );
}
