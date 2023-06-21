import Image from "next/image";
import logo from "../../public/logo-128x128.png";
import { Navigation } from "@/components/navigation";
import Button from "@/components/button";

export default function Sidebar() {
  return (
    <aside className="p-6 flex flex-col justify-between min-h-screen items-start">
      <div>
        <Image src={logo} alt="BookWise logo" />

        <Navigation
          navLinks={[
            { href: "/", name: "Strona domowa" },
            { href: "/profile", name: "Profil" },
            { href: "/shelfs", name: "Listy" },
            { href: "/search", name: "Znajdź Książkę" },
            { href: "/statistics", name: "Statystyki" },
          ]}
        />
      </div>

      <Button>Logowanie</Button>
    </aside>
  );
}
