import React, { FC } from "react";
import TotalPriceMaternity from "@/components/total-price-maternity";
import ContentStepsMaternity from "@/components/content-steps-maternity";

interface SessionPageProps {
  params: {
    slug: string;
  };
}

const MaternityBySlug: FC<SessionPageProps> = ({ params }) => {
  const { slug } = params;
  return (
    <section className="flex flex-col lg:flex-row justify-start items-start gap-4 container py-4">
      <ContentStepsMaternity slug={slug} />
      <TotalPriceMaternity slug={slug} />
    </section>
  );
};

export default MaternityBySlug;
