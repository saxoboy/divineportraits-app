"use client";
import { useRouter } from "next/navigation";
import { InfoSessionProps } from "@/interfaces/sessionInterface";
import { useCounterStore } from "@/providers/counter-store-provider";
import InfoSessionMaternity from "./session-info-maternity";
import FormPhotosMaternity from "./form-photos-maternity";
import FormsAlbumsDigital from "./form-albums-digital";
import FormFramePrints from "./form-frame-prints";
import FormPropsSpecials from "./form-props-special";
import FormScenarios from "./form-scenarios";
import FormLocationSpecials from "./form-location-specials";
import FromServiceAditional from "./form-services-aditional";
import { Separator } from "./ui/separator";
import ContentFooter from "./content-footer";

const ContentStepsMaternity = ({ slug }: InfoSessionProps) => {
  const router = useRouter();
  const { steps } = useCounterStore((state) => state);

  if (steps === 8) {
    router.push(`/resume/${slug}`);
  }

  return (
    <div className="w-full lg:w-4/6 lg:pb-4">
      {steps === 0 && <InfoSessionMaternity slug={slug} />}
      {steps === 1 && <FormPhotosMaternity slug={slug} />}
      {steps === 2 && <FormFramePrints />}
      {steps === 3 && <FormsAlbumsDigital slug={slug} />}
      {steps === 4 && <FormPropsSpecials slug={slug} />}
      {steps === 5 && <FormScenarios slug={slug} />}
      {steps === 6 && <FormLocationSpecials slug={slug} />}
      {steps === 7 && <FromServiceAditional slug={slug} />}
      <Separator />
      <ContentFooter />
    </div>
  );
};

export default ContentStepsMaternity;
