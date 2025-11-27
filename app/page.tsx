import Image from "next/image";
import { BackgroundFX } from "./components/background-fx";
import { Header } from "./components/header.component";
import { Footer } from "./components/footer.component";
import { Home } from "./components/home";

export default function HomePage() {
  return (
    <>
      <BackgroundFX />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
