// app/page.tsx

import Link from "next/link";
import AuthButtons from "./components/AuthButtons";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-10">Crée ton profil</h1>
      {/* Faire en sorte d'envoyer pseudo dans db pour venir l'afficher sur le profil de l'utilisateur
          pour l'instant j'affiche ce qu'il y a devant @ du mail mais c'est pas top */}
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Pseudo"
        className="mb-3 rounded-xl border-2 border-gray-700 bg-gray-800 text-white placeholder-gray-400 font-bold px-3 py-2 w-72 text-center"
      />
      <AuthButtons />
      <div className="flex mt-3 gap-2">
        <h2>Tu as déjà un compte ? </h2>
        <Link href="/pages/login" className="text-[#58cc02]">
          SE CONNECTER
        </Link>
      </div>
    </div>
  );
}

/*
Quand je clique sur le bouton, toute la page bouge, a modifier
 */