"use client";
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { dataSession } from "@/data/mini-session-data";
import { useCounterStore } from "@/providers/counter-store-provider";

interface InfoSessionProps {
  slug: string;
}

const FormPhotosMaternity = ({ slug }: InfoSessionProps) => {
  const { count, incrementCount, decrementCount, updateTotalPricePhotos } =
    useCounterStore((state) => state);

  const [additionalPeople, setAdditionalPeople] = useState(0);
  const sessionList = dataSession;
  const session = sessionList.find((session) => session.slug === slug);

  // Definir el número máximo de personas adicionales y el costo por persona
  const getMaxPeopleAndCost = () => {
    switch (slug) {
      case "mini-session":
        return { maxPeople: 2, costPerPerson: 50 };
      case "full-session":
        return { maxPeople: 10, costPerPerson: 50 };
      case "location-session":
        return { maxPeople: Infinity, costPerPerson: 50 }; // Sin límite de personas
      default:
        return { maxPeople: 0, costPerPerson: 0 };
    }
  };

  const { maxPeople, costPerPerson } = getMaxPeopleAndCost();

  const calculateTotalPrice = () => {
    const photoCost =
      count >= session!.priceDiscountIfMoreThan
        ? count * session!.priceByPhotoIfMoreThan
        : count * session!.priceByPhoto;

    const peopleCost = additionalPeople * costPerPerson;

    return photoCost + peopleCost;
  };

  useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    updateTotalPricePhotos(newTotalPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, additionalPeople]);

  return (
    <>
      <h1 className="text-4xl mb-4 text-center">¿Cuántas fotos deseas?</h1>
      <div className="flex gap-4 overflow-auto">
        <Image
          src="/images/photos/©PatriciaCarrozzini-91.jpg"
          alt={session!.title}
          width={250}
          height={250}
          className="mx-auto rounded-lg mb-4 w-auto h-auto"
        />
        <Image
          src="/images/photos/©PatriciaCarrozzini-381.jpg"
          alt={session!.title}
          width={250}
          height={250}
          className="mx-auto rounded-lg mb-4 w-auto h-auto"
        />
        <Image
          src="/images/photos/©PatriciaCarrozzini-390.jpg"
          alt={session!.title}
          width={250}
          height={250}
          className="mx-auto rounded-lg mb-4 w-auto h-auto"
        />
      </div>
      <div className="flex flex-col my-4 gap-4">
        <p>
          Fotos que usted elegirá de la galería y que serán retocadas
          exquisitamente para entregarle por descarga digital para su uso e
          impresiones personales.
        </p>
        <p>
          El costo por foto es de <strong>${session?.priceByPhoto}</strong>, si
          contrata <strong>{session?.priceDiscountIfMoreThan}</strong> fotos o
          más, el precio es de{" "}
          <strong>${session?.priceByPhotoIfMoreThan}</strong>
        </p>
        <div className="mx-auto my-8">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <Button
                className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-xl p-4 text-2xl"
                onClick={() => count > 3 && decrementCount()}
              >
                -
              </Button>
              <span className="mx-12 text-9xl text-center w-[150px]">
                {count}
              </span>
              <Button
                className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-xl p-4 text-2xl"
                onClick={() => incrementCount()}
              >
                +
              </Button>
            </div>
            <p className="my-4 text-center">
              Precio por foto:{" "}
              <span className="text-xl">
                <strong>
                  $
                  {count >= session!.priceDiscountIfMoreThan
                    ? session!.priceByPhotoIfMoreThan
                    : session!.priceByPhoto}
                </strong>
              </span>
            </p>
          </div>
        </div>

        {/* Personas adicionales */}
        <div className="mx-auto my-8">
          <h2 className="text-2xl mb-4 text-center">Personas adicionales</h2>
          <p className="text-center">
            {slug === "location-session"
              ? "No hay límite de personas adicionales."
              : `Puede agregar hasta ${maxPeople} personas.`}{" "}
            El costo por persona adicional es de{" "}
            <strong>${costPerPerson}</strong>.
          </p>
          <div className="flex justify-between items-center mt-4">
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl p-4 text-2xl"
              onClick={() =>
                additionalPeople > 0 &&
                setAdditionalPeople(additionalPeople - 1)
              }
            >
              -
            </Button>
            <span className="mx-12 text-9xl text-center w-[150px]">
              {additionalPeople}
            </span>
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl p-4 text-2xl"
              onClick={() =>
                additionalPeople < maxPeople &&
                setAdditionalPeople(additionalPeople + 1)
              }
            >
              +
            </Button>
          </div>
          <p className="text-center mt-4">
            Costo total por personas adicionales:{" "}
            <strong>${additionalPeople * costPerPerson}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default FormPhotosMaternity;
