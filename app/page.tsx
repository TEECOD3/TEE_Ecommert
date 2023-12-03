import Hero from "./Component/Hero";
import Newest from "./Component/Newest";

export default function Home() {
  return (
    <main className="bg-white pb-8 sm:pb-8 lg:pb-12 ">
      <Hero />
      <Newest />
    </main>
  );
}
