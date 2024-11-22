import { useRouter } from "next/navigation";
import { albumData } from "@/data/mini-session-data";
import { defaultInitState } from "@/store/counter-store";
import { useCounterStore } from "@/providers/counter-store-provider";
import { AlbumData, InfoSessionProps } from "@/interfaces/sessionInterface";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

const FormsAlbumsDigital = ({ slug }: InfoSessionProps) => {
  const router = useRouter();
  const { count, album, selectAlbum, incrementSteps } = useCounterStore(
    (state) => state
  );
  const albumList = albumData;

  //Seleccionar albumes que available contenga el slug
  const albumAviableList = albumList.filter((album) =>
    album.available.includes(slug)
  );

  const handleSelectAlbum = (album: AlbumData) => {
    if (albumAviableList && albumAviableList.length > 0) {
      if (count >= 15) {
        selectAlbum(album);
      } else {
        toast({
          variant: "destructive",
          title: "Te faltan fotos",
          description:
            "Solo puedes seleccionar un album si tienes 15 fotos o mas",
        });
      }
    } else {
      toast({
        variant: "destructive",
        title: "Album no disponible",
        description:
          "Este album solo está disponible para esta Full Session y Location Session",
        action: (
          <ToastAction
            altText="Cambiar Session"
            onClick={() => router.push("/")}
          >
            Cambiar Session
          </ToastAction>
        ),
      });
    }
  };

  return (
    <div>
      <h1 className="text-4xl mb-4 text-center">Albums Digitales</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi
        asperiores ratione, laborum facere laudantium dolore expedita eum
        inventore doloribus quibusdam id dignissimos voluptates neque,
        necessitatibus totam ad rem reiciendis. <br /> Recuerda que solo puedes
        seleccionar un album si tienes <strong>15</strong> fotos o màs
      </p>
      <div className="flex justify-end">
        <Button variant="secondary" onClick={() => incrementSteps()}>
          Saltar este paso
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-8">
        {albumList.map((albumn) => (
          <div
            key={albumn.id}
            className={`w-72 h-72 xl:w-64 xl:h-64 flex flex-col justify-center items-center shadow-md rounded-lg text-white text-2xl hover:bg-slate-400 p-4 text-center ${
              albumn.title === album.title
                ? "bg-slate-400 border-2 border-slate-950"
                : "bg-slate-700"
            }
            ${count >= 15 ? "cursor-pointer" : "cursor-not-allowed"}
            `}
            onClick={() => handleSelectAlbum(albumn)}
          >
            {albumn.title}
            {albumn.price && (
              <p className="my-4 text-base">Precio: ${albumn.price}</p>
            )}
            {albumn.description && count <= 15 && (
              <p className="text-sm">{albumn.description}</p>
            )}
          </div>
        ))}
        <div
          className="w-72 h-72 xl:w-64 xl:h-64 flex flex-col justify-center items-center bg-slate-700 shadow-md rounded-lg text-white text-xl hover:bg-slate-400 p-4 cursor-pointer text-center"
          onClick={() => selectAlbum(defaultInitState.album)}
        >
          <h3 className="font-semibold">No deseo album</h3>
        </div>
      </div>
    </div>
  );
};

export default FormsAlbumsDigital;
