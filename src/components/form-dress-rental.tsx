import Image from "next/image";
import { useState } from "react";
import { VestuariosData, vestuariosData } from "@/data/mini-session-data";
import { useCounterStore } from "@/providers/counter-store-provider";
import { Button } from "./ui/button";

interface VestuariosProps {
  slug: string;
}

const FormDressRental = ({ slug }: VestuariosProps) => {
  const { incrementSteps, addDressRental, removeDressRental } = useCounterStore((state) => state);
  const [selectedVestuarios, setSelectedVestuarios] = useState<VestuariosData[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<{
    [key: number]: number | null;
  }>({});

  const vestuariosDataList: VestuariosData[] = vestuariosData;

  const handleSelectVestuario = (
    vestuario: VestuariosData,
    priceId: number
  ) => {
    const isAlreadySelected = selectedVestuarios.some(
      (item) => item.id === vestuario.id
    );

    if (isAlreadySelected) {
      // If already selected, remove the selection
      setSelectedVestuarios((prev) =>
        prev.filter((item) => item.id !== vestuario.id)
      );
      removeDressRental(vestuario);
      setSelectedPrice((prev) => ({
        ...prev,
        [vestuario.id]: null,
      }));
    } else {
      // Add the vestuario to the selected list
      setSelectedVestuarios((prev) => [...prev, vestuario]);
      addDressRental(vestuario);

      // Set the selected price based on priceId
      setSelectedPrice((prev) => ({
        ...prev,
        [vestuario.id]: priceId,
      }));
    }
  };

  const isSelected = (vestuario: VestuariosData) => {
    return selectedVestuarios.some((item) => item.id === vestuario.id);
  };

  const getSelectedPrice = (vestuario: VestuariosData) => {
    const priceId = selectedPrice[vestuario.id];
    return vestuario.price.find((price) => price.id === priceId)?.price || 0;
  };

  return (
    <div>
      <h1 className="text-4xl mb-4 text-center">Renta de Vestuario</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi
        asperiores ratione, laborum facere laudantium dolore expedita eum
        inventore doloribus quibusdam id dignissimos voluptates neque,
        necessitatibus totam ad rem reiciendis.
      </p>
      <div className="flex justify-between mb-4">
        <Button variant="secondary" onClick={() => incrementSteps()}>
          Saltar este paso
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
        {vestuariosDataList.map((vestuario) => (
          <div
            key={vestuario.id}
            className={`p-4 shadow rounded-lg border border-slate-200 ${
              isSelected(vestuario) ? "bg-blue-100" : ""
            }`}
          >
            {vestuario.image && (
              <Image
                src={vestuario.image.src}
                alt={vestuario.title}
                width={300}
                height={100}
                className="rounded-lg mx-auto w-auto h-auto"
              />
            )}
            <h3 className="my-4 text-center text-xl">{vestuario.title}</h3>
            <p className="mb-4">{vestuario.description}</p>
            <div className="mb-4">
              {vestuario.price.map((price) => (
                <div key={price.id} className="flex justify-between">
                  <p className="mb-4">
                    Precio{" "}
                    {price.location.charAt(0).toUpperCase() +
                      price.location.slice(1)}
                    : <strong>{price.price}</strong>
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                variant={isSelected(vestuario) ? "default" : "secondary"}
                onClick={() =>
                  handleSelectVestuario(vestuario, vestuario.price[0].id)
                }
              >
                {isSelected(vestuario) ? "Seleccionado" : "Seleccionar"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormDressRental;
