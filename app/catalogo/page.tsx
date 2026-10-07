import Header from "@/components/Header";
import Catalogo from "@/components/Catalogo";

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Catalogo busqueda={q ?? ""} />
      </div>
    </main>
  );
}