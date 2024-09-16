import { FC } from "react";
import ContentSteps from "@/components/content-steps";
import TotalPrice from "@/components/total-price";

interface SessionPageProps {
  params: {
    slug: string;
  };
}

const SessionBySlug: FC<SessionPageProps> = ({ params }) => {
  const { slug } = params;
  return (
    <section className="flex flex-col lg:flex-row justify-start items-start gap-4 container py-4">
      <ContentSteps slug={slug} />
      <TotalPrice slug={slug} />
    </section>
  );
};

export default SessionBySlug;
