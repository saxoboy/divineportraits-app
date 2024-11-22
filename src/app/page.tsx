import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";

const MaternityPage = () => {
  return (
    <>
      <header className="container my-8">
        <nav>
          <ul className="flex justify-center items-center space-x-4">
            <li>Home</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </header>
      <Separator />
      <main className="container my-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          <Link href={"/"}>Patricia Carrozini Photography</Link>
        </h1>
        <p className="text-center mb-8">
          Aqui una bienvenida a mi pagina de fotografia y lo que hago
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
          <Link href="/mini-session">
            <div className="w-96 h-96 flex justify-center items-center bg-slate-500 shadow-md rounded-lg text-white text-2xl hover:bg-slate-400">
              Mini Session Maternity
            </div>
          </Link>
          <Link href="/full-session">
            <div className="w-96 h-96 flex justify-center items-center bg-slate-500 shadow-md rounded-lg text-white text-2xl hover:bg-slate-400">
              Full Session Maternity
            </div>
          </Link>
          <Link href="/location-session">
            <div className="w-96 h-96 flex justify-center items-center bg-slate-500 shadow-md rounded-lg text-white text-2xl hover:bg-slate-400">
              Location Session Maternity
            </div>
          </Link>
        </div>
      </main>
    </>
  );
};

export default MaternityPage;
