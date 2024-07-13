import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCounterStore } from "@/providers/counter-store-provider";
import { LocationSpecials, locationSpecials } from "../data/mini-session-data";
import { defaultInitState } from "@/store/counter-store";

const FormLocationSpecials = () => {
  const { incrementSteps, selectLocation } = useCounterStore((state) => state);
  const locationSpecialsData: LocationSpecials[] = locationSpecials;
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const handleSelectLocation = (locationId: number) => {
    setSelectedLocation(locationId);
    const location = locationSpecialsData.find((loc) => loc.id === locationId);
    if (location) {
      selectLocation(location);
    }
  };

  const handleDeselectLocation = () => {
    setSelectedLocation(null);
    selectLocation(defaultInitState.locations);
  };

  return (
    <div>
      <h1 className="text-4xl mb-4 text-center">Locaciones Especiales</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi
        asperiores ratione, laborum facere laudantium dolore expedita eum
        inventore doloribus quibusdam id dignissimos voluptates neque,
        necessitatibus totam ad rem reiciendis.
      </p>
      <div className="flex justify-between mb-4">
        {selectedLocation !== null && (
          <Button variant="destructive" onClick={handleDeselectLocation}>
            Cancelar selección
          </Button>
        )}
        <Button variant="secondary" onClick={() => incrementSteps()}>
          Saltar este paso
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
        {locationSpecialsData.map((location) => (
          <div
            key={location.id}
            className={`p-4 shadow rounded-lg border ${
              selectedLocation === location.id
                ? "border-blue-500"
                : "border-gray-200"
            }`}
          >
            {location.image && (
              <Image
                src={location.image?.src}
                alt={location.title}
                width={300}
                height={100}
                className="rounded-lg mx-auto"
              />
            )}
            <h3 className="my-4 text-center text-xl">{location.title}</h3>
            <p className="text-center">
              <strong>${location.price}</strong>
            </p>
            <div className="flex justify-center">
              <Button
                className={`my-4 ${
                  selectedLocation === location.id
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                variant="secondary"
                onClick={() => handleSelectLocation(location.id)}
              >
                {selectedLocation === location.id
                  ? "Seleccionado"
                  : "Seleccionar"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormLocationSpecials;
