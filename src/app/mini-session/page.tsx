import { FC } from "react";
import ContentSteps from "@/components/content-steps";
import TotalPrice from "@/components/total-price";

interface SessionPageProps {
  params: {
    slug: string;
  };
}

const MiniSessionPage: FC<SessionPageProps> = ({ params }) => {
  const { slug } = params;
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-start items-start gap-8 py-8 container">
      <ContentSteps slug={slug} />
      <TotalPrice slug={"mini-session"} />
    </section>
  );
};

export default MiniSessionPage;
