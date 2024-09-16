import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { VestuariosData, vestuariosData } from "@/data/mini-session-data";
import { useCounterStore } from "@/providers/counter-store-provider";

interface VestuariosProps {
  slug: string;
}

const FormDressRental = ({ slug }: VestuariosProps) => {
  const { incrementSteps, addDressRental, removeDressRental, dressRental } =
    useCounterStore((state) => state);
  const [selectedVestuarios, setSelectedVestuarios] = useState<
    VestuariosData[]
  >([]);

  const vestuariosDataList: VestuariosData[] = vestuariosData;

  // Load selected dresses from store when the component mounts
  useEffect(() => {
    setSelectedVestuarios(dressRental);
  }, [dressRental]);

  const handleSelectVestuario = (vestuario: VestuariosData) => {
    const isAlreadySelected = selectedVestuarios.some(
      (item) => item.id === vestuario.id
    );

    if (isAlreadySelected) {
      setSelectedVestuarios((prev) =>
        prev.filter((item) => item.id !== vestuario.id)
      );
      removeDressRental(vestuario);
    } else {
      setSelectedVestuarios((prev) => [...prev, vestuario]);
      addDressRental(vestuario);
    }
  };

  const isSelected = (vestuario: VestuariosData) => {
    return selectedVestuarios.some((item) => item.id === vestuario.id);
  };

  return (
    <div>
      <h1 className="text-4xl mb-4 text-center">Renta de Vestuario</h1>
      <div className="flex justify-end mb-4">
        <Button variant="secondary" onClick={() => incrementSteps()}>
          Saltar este paso
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
        {vestuariosDataList.map((vestuario) => {
          const isAvailable = vestuario.available.includes(slug);
          return (
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
              <p className="mb-4 text-center">{vestuario.description}</p>
              <div className="mb-4">
                <div className="flex justify-evenly items-center">
                  <p className="mb-4">
                    Precio: <strong>{vestuario.price}</strong>
                  </p>
                </div>
              </div>
              {isAvailable ? (
                <div className="flex justify-center">
                  <Button
                    variant={isSelected(vestuario) ? "default" : "secondary"}
                    onClick={() => handleSelectVestuario(vestuario)}
                  >
                    {isSelected(vestuario) ? "Seleccionado" : "Seleccionar"}
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-center mt-2 bg-slate-500 text-white w-fit mx-auto px-2 rounded">
                  No disponible para esta sesion
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormDressRental;
