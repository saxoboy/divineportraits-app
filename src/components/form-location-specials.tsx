import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCounterStore } from "@/providers/counter-store-provider";

import { defaultInitState } from "@/store/counter-store";
import {
  InfoSessionProps,
  LocationSpecials,
} from "@/interfaces/sessionInterface";
import { locationSpecials } from "@/data/mini-session-data";

const FormLocationSpecials = ({ slug }: InfoSessionProps) => {
  const { incrementSteps, selectLocation, locations } = useCounterStore(
    (state) => state
  );
  const locationSpecialsData: LocationSpecials[] = locationSpecials;

  //Seleccionar los location que available contenga el slug
  const locationSpecialsAviableList = locationSpecialsData.filter((location) =>
    location.available.includes(slug)
  );

  // Initialize local state with selected location from the store
  const [selectedLocation, setSelectedLocation] = useState<number | null>(
    locations.id
  );

  useEffect(() => {
    if (locations.id !== 0) {
      setSelectedLocation(locations.id);
    }
  }, [locations]);

  const handleSelectLocation = (locationId: number) => {
    setSelectedLocation(locationId);
    const location = locationSpecialsAviableList.find(
      (loc) => loc.id === locationId
    );
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
        {locationSpecialsData.map((location) => {
          const isAvailable = location.available.includes(slug);
          return (
            <div
              key={location.id}
              className={`p-4 shadow rounded-lg border ${
                selectedLocation === location.id
                  ? "bg-slate-200"
                  : "border-slate-300"
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
                {isAvailable ? (
                  <Button
                    className={`my-4 hover:text-black ${
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
                ) : (
                  <div className="cursor-not-allowed">
                    <p className="text-sm text-center mt-2 bg-slate-500 text-white w-fit mx-auto px-2">
                      Este escenario no está disponible para esta sesión
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end mb-4 gap-4">
        {!locationSpecialsAviableList && selectedLocation !== null && (
          <Button variant="destructive" onClick={handleDeselectLocation}>
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

export default FormLocationSpecials;
