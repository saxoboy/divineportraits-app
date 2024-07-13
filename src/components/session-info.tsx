import { dataSession } from "@/data/mini-session-data";

interface InfoSessionProps {
  slug: string;
}

const InfoSession = ({ slug }: InfoSessionProps) => {
  const sessionList = dataSession;
  const session = sessionList.find((session) => session.slug === slug);
  return (
    <>
      <h1 className="text-2xl mb-4">{session?.title}</h1>
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
