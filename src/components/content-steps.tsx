"use client";

import { useCounterStore } from "@/providers/counter-store-provider";
import InfoSession from "./session-info";
import FormPhotos from "./form-photos";
import FormsAlbumsDigital from "./form-albums-digital";
import FormFramePrints from "./form-frame-prints";
import ContentFooter from "./content-footer";

const ContentSteps = () => {
  const { steps } = useCounterStore((state) => state);
  return (
    <div className="w-4/6 px-4 h-[5000px]">
      {steps === 0 && <InfoSession slug={"mini-session"} />}
      {steps === 1 && <FormPhotos slug={"mini-session"} />}
      {steps === 2 && <FormsAlbumsDigital />}
      {steps === 3 && <FormFramePrints />}
      <ContentFooter />
    </div>
  );
};

export default ContentSteps;
