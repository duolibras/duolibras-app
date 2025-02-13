"use client"

import { useStore } from "@/shared/store/use-store";
import { LessonContent } from "./lesson-content";

export default function LessonPage() {
  const { modules } = useStore();

  return (
    <LessonContent modules={modules} />
  );
}
