import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCounterStore } from "@/providers/counter-store-provider";
import { defaultInitState } from "@/store/counter-store";
import { InfoSessionProps, ScenariosData } from "@/interfaces/sessionInterface";
import { scenariosData } from "@/data/mini-session-data";

const FormScenarios = ({ slug }: InfoSessionProps) => {
  const { incrementSteps, selectScenario, scenarios } = useCounterStore(
    (state) => state
  );
  const scenariosDataList: ScenariosData[] = scenariosData;

  //Seleccionar los scenarios que available contenga el slug
  const scenariosAviableList = scenariosDataList.filter((scenario) =>
    scenario.available.includes(slug)
  );

  // Initialize local state with selected scenario and price from the store
  const [selectedScenario, setSelectedScenario] = useState<number | null>(
    scenarios.id
  );
  const [selectedPrice, setSelectedPrice] = useState<number | null>(
    scenarios.price[0]?.id || null
  );

  useEffect(() => {
    if (scenarios.id !== 0) {
      setSelectedScenario(scenarios.id);
      setSelectedPrice(scenarios.price[0]?.id || null);
    }
  }, [scenarios]);

  const handleSelectScenario = (scenarioId: number, priceId: number) => {
    setSelectedScenario(scenarioId);
    setSelectedPrice(priceId);
    const scenario = scenariosAviableList.find((s) => s.id === scenarioId);
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
        {scenariosDataList.map((scenario) => {
          const isAvailable = scenario.available.includes(slug);
          return (
            <div
              key={scenario.id}
              className={`p-4 shadow rounded-lg border ${
                selectedScenario === scenario.id
                  ? "bg-slate-200"
                  : "border-slate-200"
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
              {isAvailable ? (
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
                      className="flex flex-1 flex-col items-center justify-center p-4 bg-gray-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                    >
                      <RadioGroupItem value={price.id.toString()} />
                      <h5 className="text-base text-center">
                        {price.description}
                      </h5>
                      <p className="text-center">
                        <strong>${price.price}</strong>
                      </p>
                    </label>
                  ))}
                </RadioGroup>
              ) : (
                <div className="cursor-not-allowed">
                  {scenario.price.map((price) => (
                    <div key={price.id}>
                      <h5 className="text-base text-center">
                        {price.description}
                      </h5>
                      <p className="text-center">
                        <strong>${price.price}</strong>
                      </p>
                    </div>
                  ))}
                  <p className="text-sm text-center mt-2 bg-slate-500 text-white w-fit mx-auto px-2 rounded">
                    Este escenario no está disponible para esta sesión
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-end gap-4 my-4">
        {!scenariosAviableList && selectedScenario !== null && (
          <Button variant="destructive" onClick={handleDeselectScenario}>
            Cancelar selección
          </Button>
        )}
        <Button variant="secondary" onClick={() => incrementSteps()}>
          Saltar este paso
        </Button>
      </div>
    </div>
  );
};

export default FormScenarios;
