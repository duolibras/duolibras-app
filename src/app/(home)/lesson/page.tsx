"use client"

import { PageSlide } from "@/components/ui/page-slide";
import { useStore } from "@/shared/store/use-store";
import { useEffect } from "react";
import { LessonContent } from "./lesson-content";

export default function LessonPage() {
  const { modules } = useStore();

  useEffect(() => {
    // Adiciona um novo estado no histórico para "travar" a navegação
    history.pushState(null, "", location.href);

    const handlePopState = () => {
      history.pushState(null, "", location.href); // Reescreve o histórico para impedir o back
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <PageSlide>
      <LessonContent modules={modules} />
    </PageSlide>
  );
}