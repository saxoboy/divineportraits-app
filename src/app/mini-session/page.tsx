import React from "react";
import InfoSession from "@/components/session-info";
import FormPhotos from "@/components/form-photos";

const MiniSessionPage = () => {
  return (
    <section className="flex justify-start items-start gap-8 py-8">
      <div className="w-4/6 px-4 h-[5000px]">
        <InfoSession slug={"mini-session"} />
        <FormPhotos slug={"mini-session"} />
      </div>

      <div className="w-2/6 bg-slate-100 sticky top-8">
        <h2>Su cotizacion para su Mini Session Custom es:</h2>
        <p>
          <strong>Costo:</strong> $100
        </p>
      </div>
    </section>
  );
};

export default MiniSessionPage;
