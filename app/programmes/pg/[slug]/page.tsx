"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import ProgramDetailPage from "../../../components/ProgramDetailPage";
import { getProgramBySlug, getRelatedPrograms } from "../../programmes-data";

export default function PGProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const program = getProgramBySlug(slug, "pg");

  if (!program) {
    notFound();
  }

  const relatedPrograms = getRelatedPrograms(slug, "pg", 4);

  return <ProgramDetailPage program={program} relatedPrograms={relatedPrograms} />;
}
