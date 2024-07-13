import Image from "next/image";
import { useState } from "react";
import {
  InfoSessionProps,
  ScenariosData,
  scenariosData,
} from "@/data/mini-session-data";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCounterStore } from "@/providers/counter-store-provider";
import { defaultInitState } from "@/store/counter-store";

const FormScenarios = ({ slug }: InfoSessionProps) => {
  const { incrementSteps, selectScenario } = useCounterStore((state) => state);
  const scenariosDataList: ScenariosData[] = scenariosData;
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const handleSelectScenario = (scenarioId: number, priceId: number) => {
    setSelectedScenario(scenarioId);
    setSelectedPrice(priceId);
    const scenario = scenariosDataList.find((s) => s.id === scenarioId);
    const price = scenario?.price.find((p) => p.id === priceId);
    if (scenario && price) {
      selectScenario({
        ...scenario,
        price: [price],
      });
    }
  };

  const handleDeselectScenario = () => {
    setSelectedScenario(null);
    setSelectedPrice(null);
    selectScenario(defaultInitState.scenarios);
  };

  return (
    <div>
      <h1 className="text-4xl mb-4 text-center">Escenarios</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi
        asperiores ratione, laborum facere laudantium dolore expedita eum
        inventore doloribus quibusdam id dignissimos voluptates neque,
        necessitatibus totam ad rem reiciendis.
      </p>
      <div className="flex justify-between">
        {selectedScenario !== null && (
          <Button variant="destructive" onClick={handleDeselectScenario}>
            Cancelar selección
          </Button>
        )}
        <Button variant="secondary" onClick={() => incrementSteps()}>
          Saltar este paso
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
        {scenariosDataList.map((scenario) => (
          <div
            key={scenario.id}
            className={`p-4 shadow rounded-lg border ${
              selectedScenario === scenario.id
                ? "border-slate-800"
                : "border-gray-200"
            }`}
          >
            {scenario.image && (
              <Image
                src={scenario.image?.src}
                alt={scenario.title}
                width={300}
                height={100}
                className="rounded-lg mx-auto"
              />
            )}
            <h3 className="my-4 text-center text-xl">{scenario.title}</h3>
            <RadioGroup
              className="flex flex-row space-x-4 justify-around"
              value={
                selectedScenario === scenario.id && selectedPrice !== null
                  ? selectedPrice.toString()
                  : ""
              }
              onValueChange={(value) =>
                handleSelectScenario(scenario.id, Number(value))
              }
            >
              {scenario.price.map((price) => (
                <label
                  key={price.id}
                  className="flex flex-col items-center justify-center p-4 bg-gray-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  <RadioGroupItem value={price.id.toString()} />
                  <h5 className="text-base text-center">{price.description}</h5>
                  <p className="text-center">
                    <strong>${price.price}</strong>
                  </p>
                </label>
              ))}
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormScenarios;
