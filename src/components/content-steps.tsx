"use client";

import { useCounterStore } from "@/providers/counter-store-provider";
import InfoSession from "./session-info";
import FormPhotos from "./form-photos";
import FormsAlbumsDigital from "./form-albums-digital";
import FormFramePrints from "./form-frame-prints";
import ContentFooter from "./content-footer";
import FormPropsSpecials from "./form-props-special";
import FormScenarios from "./form-scenarios";
import FormLocationSpecials from "./form-location-specials";
import FormDressRental from "./form-dress-rental";
import FromServiceAditional from "./form-services-aditional";
import { Separator } from "./ui/separator";
import { InfoSessionProps } from "@/data/mini-session-data";
import ResumeSession from "./resumeSession";

const ContentSteps = ({ slug }: InfoSessionProps) => {
  const { steps } = useCounterStore((state) => state);
  return (
    <div className="w-full lg:w-4/6 pt-4 lg:pb-4">
      {steps === 0 && <InfoSession slug={slug} />}
      {steps === 1 && <FormPhotos slug={slug} />}
      {steps === 2 && <FormFramePrints />}
      {steps === 3 && <FormsAlbumsDigital slug={slug} />}
      {steps === 4 && <FormPropsSpecials slug={slug} />}
      {steps === 5 && <FormScenarios slug={slug} />}
      {steps === 6 && <FormLocationSpecials slug={slug} />}
      {steps === 7 && <FormDressRental slug={slug} />}
      {steps === 8 && <FromServiceAditional slug={slug} />}
      {steps === 9 && <ResumeSession slug={slug} />}
      <Separator />
      <ContentFooter />
    </div>
  );
};

export default ContentSteps;
