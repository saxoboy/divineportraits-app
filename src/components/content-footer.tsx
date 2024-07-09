"use client";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useCounterStore } from "@/providers/counter-store-provider";

const ContentFooter = () => {
  const { steps, incrementSteps, decrementSteps } = useCounterStore(
    (state) => state
  );
  return (
    <>
      <Separator />
      <div
        className={`flex items-center space-x-8 mt-4 ${
          steps === 0 ? "justify-end" : "justify-evenly"
        }`}
      >
        {steps > 0 && (
          <Button variant="secondary" onClick={() => decrementSteps()}>
            Atras
          </Button>
        )}

        <Button variant="secondary" onClick={() => incrementSteps()}>
          Siguiente
        </Button>
      </div>
    </>
  );
};

export default ContentFooter;
