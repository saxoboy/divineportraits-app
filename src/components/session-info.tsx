import Image from "next/image";
import { dataSession } from "@/data/mini-session-data";

interface InfoSessionProps {
  slug: string;
}

const InfoSession = ({ slug }: InfoSessionProps) => {
  const sessionList = dataSession;
  const session = sessionList.find((session) => session.slug === slug);
  return (
    <>
      <h1 className="text-4xl mb-4 text-center">{session?.title}</h1>
      <Image
        src="/images/session/prop-test.jpg"
        alt={session!.title}
        width={500}
        height={500}
        className="mx-auto rounded-lg mb-4"
      />
      <p className="mb-4">
        Tiempo: <strong>{session?.time} minutos</strong>
      </p>
      <p className="mb-4">
        Costo de la session: <strong>${session?.price}</strong>
      </p>
      <div
        className="mb-4 text-description"
        dangerouslySetInnerHTML={{ __html: session?.description || "" }}
      />
    </>
  );
};

export default InfoSession;
