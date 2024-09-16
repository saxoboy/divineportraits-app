import Image from "next/image";
import { Button } from "@/components/ui/button";
import { servicesAdicional, ServicesAdicional } from "@/data/mini-session-data";
import { useCounterStore } from "@/providers/counter-store-provider";

interface FromServiceAditionalProps {
  slug: string;
}

const FromServiceAditional = ({ slug }: FromServiceAditionalProps) => {
  const {
    incrementSteps,
    addServicioAdicional,
    removeServicioAdicional,
    serviciosAdicionales,
  } = useCounterStore((state) => state);

  const serviciosAdicionalesDataList: ServicesAdicional[] = servicesAdicional;

  // Verifica si un servicio ya ha sido seleccionado
  const isSelected = (servicio: ServicesAdicional) => {
    return serviciosAdicionales.some((s) => s.id === servicio.id);
  };

  // Maneja la lógica de selección o deselección
  const handleSelectServicio = (servicio: ServicesAdicional) => {
    if (isSelected(servicio)) {
      removeServicioAdicional(servicio); // Deselecciona si ya está seleccionado
    } else {
      addServicioAdicional(servicio); // Selecciona si no está seleccionado
    }
  };

  return (
    <div>
      <h1 className="text-4xl mb-4 text-center">Servicios Adicionales</h1>
      <div className="flex justify-end mb-4">
        <Button variant="secondary" onClick={() => incrementSteps()}>
          Saltar este paso
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
        {serviciosAdicionalesDataList.map((servicio) => {
          const isAvailable = servicio.avaible.includes(slug);
          return (
            <div
              key={servicio.id}
              className={`p-4 shadow rounded-lg border border-slate-200`}
            >
              {servicio.image && (
                <Image
                  src={servicio.image.src}
                  alt={servicio.title}
                  width={300}
                  height={100}
                  className="rounded-lg mx-auto w-auto h-auto"
                />
              )}
              <h3 className="my-4 text-center text-xl">{servicio.title}</h3>
              <p className="mb-4 text-center">{servicio.description}</p>
              <div className="mb-4">
                <div className="flex justify-evenly items-center">
                  <p className="mb-4">
                    Precio: <strong>{servicio.price}</strong>
                  </p>
                </div>
              </div>
              {isAvailable ? (
                <div className="flex justify-center">
                  <Button
                    variant={isSelected(servicio) ? "default" : "secondary"}
                    onClick={() => handleSelectServicio(servicio)}
                  >
                    {isSelected(servicio) ? "Seleccionado" : "Seleccionar"}
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

export default FromServiceAditional;
