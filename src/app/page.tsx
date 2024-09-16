import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import SessionPage from "./session/page";

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
            <li>
              <ModeToggle />
            </li>
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

        <SessionPage />
      </main>
    </>
  );
}
