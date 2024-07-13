import Image from "next/image";
import {
  InfoSessionProps,
  ScenariosData,
  scenariosData,
} from "@/data/mini-session-data";
import { Button } from "./ui/button";

const FormScenarios = ({ slug }: InfoSessionProps) => {
  const scenariosDataList: ScenariosData[] = scenariosData;
  return (
    <div>
      <h2 className="text-2xl mb-4">Escenarios</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi
        asperiores ratione, laborum facere laudantium dolore expedita eum
        inventore doloribus quibusdam id dignissimos voluptates neque,
        necessitatibus totam ad rem reiciendis.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
        {scenariosDataList.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white p-4 shadow rounded-lg border border-gray-200"
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
            <div className="flex flex-col space-y-4">
              {scenario.price.map((price) => (
                <div
                  key={price.id}
                  className="flex flex-col items-center justify-between p-4 bg-gray-100 rounded-lg "
                >
                  <h5 className="text-base text-center">{price.description}</h5>
                  <p className="text-center"><strong>${price.price}</strong></p>
                </div>
              ))}
            </div>
            {/* <Button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg">
              Ver más
            </Button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormScenarios;
