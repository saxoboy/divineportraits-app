"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useCounterStore } from "@/providers/counter-store-provider";

const ContentFooter = () => {
  const { steps, incrementSteps, decrementSteps } = useCounterStore(
    (state) => state
  );
  return (
    <>
      <div
        className={`flex items-center space-x-8 mt-4 ${
          steps === 0 ? "justify-end" : "justify-evenly"
        }`}
      >
        {steps > 0 && (
          <Button
            className="gap-2 uppercase"
            variant="secondary"
            onClick={() => decrementSteps()}
          >
            <MoveLeft /> Atras
          </Button>
        )}

        <Button
          className="gap-2 uppercase"
          variant="secondary"
          onClick={() => incrementSteps()}
        >
          Siguiente <MoveRight />
        </Button>
      </div>
    </>
  );
};

export default ContentFooter;
