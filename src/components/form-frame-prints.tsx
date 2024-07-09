import { cuadrosData } from "@/data/mini-session-data";
import { useCounterStore } from "@/providers/counter-store-provider";
import { defaultInitState } from "@/store/counter-store";
import { Button } from "./ui/button";

const FormFramePrints = () => {
  const { frame, selectFrame, incrementSteps } = useCounterStore(
    (state) => state
  );

  const cuadrosDataList = cuadrosData;

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Selecciona un marco</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
        {cuadrosDataList.map((frameselect) => (
          <div
            key={frameselect.id}
            className={`w-80 h-80 flex flex-col justify-center items-center shadow-md rounded-lg text-white text-2xl hover:bg-slate-400 p-4 text-center cursor-pointer ${
              frameselect.title === frame.title
                ? "bg-slate-400 border-2 border-slate-950"
                : "bg-slate-700"
            }
              `}
            onClick={() => selectFrame(frameselect)}
          >
            <h3 className="font-semibold">{frameselect.title}</h3>
            <p className="text-base">Precio: ${frameselect.price}</p>
          </div>
        ))}
        <div
          className="w-80 h-80 flex flex-col justify-center items-center bg-slate-700 shadow-md rounded-lg text-white text-2xl hover:bg-slate-400 p-4 cursor-pointer text-center"
          onClick={() => selectFrame(defaultInitState.frame)}
        >
          <p className="mb-4">No deseo cuadro impreso</p>
          <Button variant="secondary" onClick={() => incrementSteps()}>
            Siguiente Paso
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormFramePrints;