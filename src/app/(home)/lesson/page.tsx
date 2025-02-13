"use client"

import { PageSlide } from "@/components/ui/page-slide";
import { useStore } from "@/shared/store/use-store";
import { LessonContent } from "./lesson-content";

export default function LessonPage() {
  const { modules } = useStore();

  return (
    <PageSlide>
      <LessonContent modules={modules} />
    </PageSlide>
  );
}