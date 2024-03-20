"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-100 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-100 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-5xl text-xl text-gray-800 relative z-20 font-bold")}>
        Tensorflow User Group Jalandhar
      </h1>
      <p className="text-center mt-2 text-gray-700 relative z-20">
        We are a group of developers, researchers, and students who are
        interested in machine learning and deep learning.
      </p>
    </div>
  );
}
