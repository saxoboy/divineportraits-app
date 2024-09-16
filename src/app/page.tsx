import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <header className="container my-8">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li>Home</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
            <li><ModeToggle /></li>
          </ul>
        </nav>
      </header>
      <Separator />
      <main className="container my-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Patricia Carrozini Photography
        </h1>

        <p className="text-center mb-8">
          Aqui una bienvenida a mi pagina de fotografia y lo que hago
        </p>

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
      </main>
    </>
  );
}
