import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Specs } from "@/components/Specs";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark w-full overflow-x-hidden">
      <Hero />
      <Services />
      <Specs />
      <CTA />
      
      <footer className="bg-dark text-zinc-600 font-space text-sm py-8 text-center border-t border-zinc-900">
        <p>&copy; {new Date().getFullYear()} Usługi Busem Kamil — Całe Podlaskie. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </main>
  );
}