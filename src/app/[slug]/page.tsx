import React, { FC } from "react";
import TotalPriceMaternity from "@/components/total-price-maternity";
import ContentStepsMaternity from "@/components/content-steps-maternity";
import Link from "next/link";

interface SessionPageProps {
  params: {
    slug: string;
  };
}

const MaternityBySlug: FC<SessionPageProps> = ({ params }) => {
  const { slug } = params;
  return (
    <section className="flex flex-col justify-start items-center gap-4 container py-4">
      <header>
        <h1 className="text-4xl font-bold text-center my-4">
          <Link href={"/"}>Patricia Carrozini Photography</Link>
        </h1>
      </header>
      <div className="flex flex-col lg:flex-row justify-start items-start gap-4 container py-4">
        <ContentStepsMaternity slug={slug} />
        <TotalPriceMaternity slug={slug} />
      </div>
    </section>
  );
};

export default MaternityBySlug;
