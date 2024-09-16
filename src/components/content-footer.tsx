"use client";
import { MoveLeft, MoveRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/providers/counter-store-provider";

const ContentFooter = () => {
  const { steps, incrementSteps, decrementSteps } = useCounterStore(
    (state) => state
  );

  return (
    <>
      <div
        className={`flex items-center space-x-8 my-4 ${
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
          {steps === 8 ? (
            <>
              Finalizar <CheckCircle />
            </>
          ) : (
            <>
              Siguiente <MoveRight />
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default ContentFooter;
