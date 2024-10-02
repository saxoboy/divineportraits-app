import Link from "next/link";

const HomeSession = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 place-items-center">
      <Link href="/session">
        <div className="w-96 h-96 flex justify-center items-center bg-slate-500 shadow-md rounded-lg text-white text-2xl hover:bg-slate-400">
          Session Quinceañeras
        </div>
      </Link>
      <Link href="/maternity">
        <div className="w-96 h-96 flex justify-center items-center bg-slate-500 shadow-md rounded-lg text-white text-2xl hover:bg-slate-400">
          Session Maternal
        </div>
      </Link>
    </div>
  );
};

export default HomeSession;
