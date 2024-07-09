import ContentSteps from "@/components/content-steps";
import TotalPrice from "@/components/total-price";

const MiniSessionPage = () => {
  return (
    <section className="flex justify-start items-start gap-8 py-8">
      <ContentSteps />

      <div className="w-2/6 bg-slate-100 sticky top-8">
        <h2>Su cotizacion para su Mini Session Custom es:</h2>
        <TotalPrice />
      </div>
    </section>
  );
};

export default MiniSessionPage;
