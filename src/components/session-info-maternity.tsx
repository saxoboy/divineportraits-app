import Image from "next/image";
import { dataSession } from "@/data/maternity-data";

interface InfoSessionProps {
  slug: string;
}

const InfoSessionMaternity = ({ slug }: InfoSessionProps) => {
  const sessionList = dataSession;
  const session = sessionList.find((session) => session.slug === slug);
  return (
    <>
      <h1 className="text-4xl mb-2 text-center">{session?.title}</h1>
      <Image
        src="/images/session/prop-test.jpg"
        alt={session?.title || ""}
        width={500}
        height={500}
        className="mx-auto rounded-lg mb-4 w-auto h-auto"
        priority
      />
      <p className="mb-4">
        Tiempo: <strong>{session?.time} minutos</strong>
      </p>
      <p className="mb-4">
        Costo de la session: <strong>${session?.price}</strong>
      </p>
      <p className="mb-8">
        Online Photo Gallery: <strong>FREE</strong>
      </p>
      <h2 className="text-3xl mb-2">Recomendaciones:</h2>
      <div
        className="mb-4 text-description"
        dangerouslySetInnerHTML={{ __html: session?.description || "" }}
      />
      <p className="mb-4">
        Nosotros nos encargamos eficientemente de ayudarle a posar y le
        dirigiremos para lograr las fotos que desea, acomodando la iluminacion
        de manera adecuada en relación a usted dentro del escenario, pero tenga
        en cuenta que la foto depende mucho de usted, si esta con apuros no
        tendra tiempo de relajarse y sentirse cómoda frente a la camara. Además
        que ciertos vestuarios y ciertas poses requieren y consumen cierto
        tiempo para su correcta ejecución.
      </p>
    </>
  );
};

export default InfoSessionMaternity;
