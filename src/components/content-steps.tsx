"use client";

import { useCounterStore } from "@/providers/counter-store-provider";
import InfoSession from "./session-info";
import FormPhotos from "./form-photos";
import FormsAlbumsDigital from "./form-albums-digital";
import FormFramePrints from "./form-frame-prints";
import ContentFooter from "./content-footer";
import FormPropsSpecials from "./form-props-special";
import FormScenarios from "./form-scenarios";

const ContentSteps = () => {
  const { steps } = useCounterStore((state) => state);
  return (
    <div className="w-4/6 px-4">
      {steps === 0 && <InfoSession slug={"mini-session"} />}
      {steps === 1 && <FormPhotos slug={"mini-session"} />}
      {steps === 2 && <FormFramePrints />}
      {steps === 3 && <FormsAlbumsDigital slug={"mini-session"} />}
      {steps === 4 && <FormPropsSpecials slug={"mini-session"} />}
      {steps === 5 && <FormScenarios slug={"mini-session"} />}
      <ContentFooter />
    </div>
  );
};

export default ContentSteps;
