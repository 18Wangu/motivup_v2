import AuthButtons from "./components/AuthButtons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Bienvenue sur mon app !</h1>
      <AuthButtons />
    </main>
  );
}
