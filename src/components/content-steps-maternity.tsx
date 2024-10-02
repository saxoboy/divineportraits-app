"use client";

import { useCounterStore } from "@/providers/counter-store-provider";
import InfoSessionMaternity from "./session-info-maternity";
import FormPhotosMaternity from "./form-photos-maternity";
import FormsAlbumsDigital from "./form-albums-digital";
import FormFramePrints from "./form-frame-prints";
import ContentFooter from "./content-footer";
import FormPropsSpecials from "./form-props-special";
import FormScenarios from "./form-scenarios";
import FormLocationSpecials from "./form-location-specials";
import FormDressRental from "./form-dress-rental";
import FromServiceAditional from "./form-services-aditional";
import { Separator } from "./ui/separator";
import ResumeSession from "./resumeSession";
import { InfoSessionProps } from "@/interfaces/sessionInterface";

const ContentStepsMaternity = ({ slug }: InfoSessionProps) => {
  const { steps } = useCounterStore((state) => state);
  return (
    <div className="w-full lg:w-4/6 pt-4 lg:pb-4">
      {steps === 0 && <InfoSessionMaternity slug={slug} />}
      {steps === 1 && <FormPhotosMaternity slug={slug} />}
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

export default ContentStepsMaternity;
