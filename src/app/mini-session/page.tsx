import ContentSteps from "@/components/content-steps";
import TotalPrice from "@/components/total-price";

const MiniSessionPage = () => {
  return (
    <section className="flex justify-start items-start gap-8 py-8">
      <ContentSteps />
      <TotalPrice slug={"mini-session"} />
    </section>
  );
};

export default MiniSessionPage;
