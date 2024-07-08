"use client";
import { Button } from "@/components/ui/button";
import { dataSession } from "@/data/mini-session-data";
import { useCounterStore } from "@/providers/counter-store-provider";

// const FormSchema = z.object({
//   photos: z
//     .preprocess(
//       (value) => Number(value),
//       z.number().min(3, "Por favor seleccione al menos 3 fotos")
//     ) // Convert the input to a number
//     .refine((value) => !isNaN(value), "Please select the number of photos"), // Require the field to be defined
// });

interface InfoSessionProps {
  slug: string;
}

const FormPhotos = ({ slug }: InfoSessionProps) => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );
  const sessionList = dataSession;
  const session = sessionList.find((session) => session.slug === slug);

  return (
    <>
      <h2 className="text-xl my-4">Cuantas Fotos Deseas?</h2>
      <div className="flex items-center flex-col lg:flex-row my-4 gap-8">
        <div className="w-full lg:w-1/2">
          <p className="mb-4">
            Fotos que usted eligirá de la galeria y que seran retocados
            exquisitamente para entregarle por descarga digital para su uso e
            impresiones personales.
          </p>
        </div>
        <div className="w-full lg:w-1/2 max-w-44">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <Button
                className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-xl p-4 text-2xl"
                onClick={() => decrementCount()}
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
                  {count >= 11
                    ? session?.priceByPhotoIfMoreThan
                    : session?.priceByPhoto}
                </strong>
              </span>
            </p>
          </div>
          <div>
            <Button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold rounded-xl">
              Agregar {count} al Carrito
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPhotos;
