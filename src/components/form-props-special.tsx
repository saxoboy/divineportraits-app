import Image from "next/image";
import { useCounterStore } from "@/providers/counter-store-provider";
import { InfoSessionProps, PropsSpecials } from "@/interfaces/sessionInterface";
import { propsSpecials } from "@/data/mini-session-data";
import { Switch } from "./ui/switch";
import { toast } from "./ui/use-toast";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const FormPropsSpecials = ({ slug }: InfoSessionProps) => {
  const { props, addProp, removeProp, incrementSteps } = useCounterStore(
    (state) => state
  );

  const propsDataList = propsSpecials;

  //Seleccionar los props que available contenga el slug
  const propsAviableList = propsDataList.filter((propsData) =>
    propsData.available.includes(slug)
  );

  const handleSelectProps = (selectedProp: PropsSpecials) => {
    if (propsAviableList.some((prop) => prop.id === selectedProp.id)) {
      if (props.some((prop) => prop.id === selectedProp.id)) {
        removeProp(selectedProp);
      } else {
        addProp(selectedProp);
      }
    } else {
      toast({
        variant: "destructive",
        title: "Props no disponible",
        description: "Este prop no está disponible para esta sesión",
      });
    }
  };

  return (
    <div className="mb-4">
      <h1 className="text-4xl mb-4 text-center">Props Especiales</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi
        asperiores ratione, laborum facere laudantium dolore expedita eum
        inventore doloribus quibusdam id dignissimos voluptates neque,
        necessitatibus totam ad rem reiciendis.
      </p>
      <div className="flex justify-end">
        <Button variant="secondary" onClick={() => incrementSteps()}>
          Saltar este paso
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        {propsDataList.map((propsData) => {
          const isAvailable = propsData.available.includes(slug);
          return (
            <div
              key={propsData.id}
              className="flex flex-col items-center justify-between p-4 bg-slate-100 rounded-lg"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-4/6">
                  {propsData.image && (
                    <Image
                      src={propsData.image?.src}
                      alt={propsData.title}
                      width={300}
                      height={100}
                      className="rounded-lg w-auto h-auto"
                    />
                  )}
                </div>
                <div className="w-2/6">
                  <h3 className="text-base my-2 font-semibold">
                    {propsData.title}
                  </h3>
                  <p className="">
                    Precio: <strong>${propsData.price}</strong>
                  </p>
                </div>
              </div>
              {isAvailable ? (
                <div className="flex items-center space-x-2">
                  <Switch
                    id={propsData.title}
                    checked={props.some((prop) => prop.id === propsData.id)}
                    onCheckedChange={() => handleSelectProps(propsData)}
                    disabled={
                      props.some((prop) => prop.id === propsData.id) &&
                      props.length === 0
                    }
                  />
                  <Label htmlFor={propsData.title}>Agregar</Label>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-center mt-2 bg-slate-500 text-white w-fit mx-auto px-2 rounded">
                    Este prop no está disponible para esta sesión
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormPropsSpecials;
