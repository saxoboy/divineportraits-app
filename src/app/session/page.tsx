import Link from "next/link";

const SessionPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
      <Link href="/session/mini-session">
        <div className="w-96 h-96 flex justify-center items-center bg-slate-500 shadow-md rounded-lg text-white text-2xl hover:bg-slate-400">
          Mini Session
        </div>
      </Link>
      <Link href="/session/full-session">
        <div className="w-96 h-96 flex justify-center items-center bg-slate-500 shadow-md rounded-lg text-white text-2xl hover:bg-slate-400">
          Full Session
        </div>
      </Link>
      <Link href="/session/location-session">
        <div className="w-96 h-96 flex justify-center items-center bg-slate-500 shadow-md rounded-lg text-white text-2xl hover:bg-slate-400">
          Location Session
        </div>
      </Link>
    </div>
  );
};

export default SessionPage;
