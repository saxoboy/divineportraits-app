import { AlbumData, albumData } from "@/data/mini-session-data";
import { useCounterStore } from "@/providers/counter-store-provider";
import { Button } from "./ui/button";
import { defaultInitState } from "@/store/counter-store";

const FormsAlbumsDigital = () => {
  const { count, album, selectAlbum, incrementSteps } = useCounterStore(
    (state) => state
  );
  const albumList = albumData;

  const handleSelectAlbum = (album: AlbumData) => {
    selectAlbum(album);
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Albums Digitales</h1>
      <p className="mb-4">Selecciona el album que deseas</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
        {albumList.map((albumn) => (
          <div
            key={albumn.id}
            className={`w-80 h-80 flex flex-col justify-center items-center shadow-md rounded-lg text-white text-2xl hover:bg-slate-400 p-4 text-center ${
              albumn.title === album.title
                ? "bg-slate-400 border-2 border-slate-950"
                : "bg-slate-700"
            }
            ${count >= 15 ? "cursor-pointer" : "cursor-not-allowed"}
            `}
            onClick={() => {
              if (count >= 15) {
                handleSelectAlbum(albumn);
              } else {
                alert(
                  "Solo puedes seleccionar un album si tienes 15 fotos o mas"
                );
              }
            }}
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
          className="w-80 h-80 flex flex-col justify-center items-center bg-slate-700 shadow-md rounded-lg text-white text-2xl hover:bg-slate-400 p-4 cursor-pointer text-center"
          onClick={() => selectAlbum(defaultInitState.album)}
        >
          <p className="mb-4">No deseo album</p>
          <Button variant="secondary" onClick={() => incrementSteps()}>
            Siguiente Paso
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormsAlbumsDigital;
