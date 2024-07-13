"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { dataSession } from "@/data/mini-session-data";
import { useCounterStore } from "@/providers/counter-store-provider";

interface InfoSessionProps {
  slug: string;
}

const FormPhotos = ({ slug }: InfoSessionProps) => {
  const { count, incrementCount, decrementCount, updateTotalPricePhotos } =
    useCounterStore((state) => state);

  const sessionList = dataSession;
  const session = sessionList.find((session) => session.slug === slug);

  const calculateTotalPrice = () => {
    if (count >= session!.priceDiscountIfMoreThan) {
      return count * session!.priceByPhotoIfMoreThan;
    } else {
      return count * session!.priceByPhoto;
    }
  };

  useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    updateTotalPricePhotos(newTotalPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <>
      <h2 className="text-2xl font-semibold my-4">Cuantas fotos deseas?</h2>
      <div className="flex flex-col my-4 gap-4">
        <p>
          Fotos que usted eligirá de la galeria y que seran retocados
          exquisitamente para entregarle por descarga digital para su uso e
          impresiones personales.
        </p>
        <p>
          El costo por foto es de ${session?.priceByPhoto}, si contrata{" "}
          {session?.priceDiscountIfMoreThan} o más, el precio es de{" "}
          {session?.priceByPhotoIfMoreThan}
        </p>
        <div className="mx-auto max-w-44 my-8">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <Button
                className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-xl p-4 text-2xl"
                onClick={() => count > 3 && decrementCount()}
              >
                -
              </Button>
              <span className="mx-8 text-2xl w-8 text-center">{count}</span>
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
      </div>
    </>
  );
};

export default FormPhotos;

// const FormSchema = z.object({
//   photos: z
//     .preprocess(
//       (value) => Number(value),
//       z.number().min(3, "Por favor seleccione al menos 3 fotos")
//     ) // Convert the input to a number
//     .refine((value) => !isNaN(value), "Please select the number of photos"), // Require the field to be defined
// });
