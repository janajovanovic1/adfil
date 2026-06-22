import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO SEKCIJA */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div className="max-w-3xl">
          <p className="text-[#9BBC5C] font-semibold tracking-widest uppercase">
            Quality Auto Parts
          </p>

          <h1 className="text-6xl font-bold text-slate-900 mt-4">
            ADFIL
          </h1>

          <h2 className="text-3xl font-semibold text-slate-700 mt-3">
            Kvalitetni filteri i auto delovi
          </h2>

          <p className="text-lg text-slate-500 mt-6">
            Kvalitetni filteri i auto delovi razvijeni za pouzdan rad,
            dug vek trajanja i maksimalne performanse vozila.
          </p>

          <div className="flex gap-4 mt-10">
            <Link
              href="/katalog"
              className="bg-[#9BBC5C] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90"
            >
              Pogledaj katalog
            </Link>

            <Link
              href="/kontakt"
              className="border border-slate-300 px-6 py-3 rounded-lg font-medium"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      {/* ZASTO ADFIL */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Zašto ADFIL?
          </h2>

          <p className="text-slate-500 mt-4">
            Kvalitet na koji možete da se oslonite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              🛡️ Proveren kvalitet
            </h3>

            <p className="text-slate-600">
              Pažljivo odabrani proizvodi koji ispunjavaju visoke standarde kvaliteta.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              ⚙️ Širok asortiman
            </h3>

            <p className="text-slate-600">
              Filteri i auto-delovi za veliki broj modela vozila.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              🚚 Brza dostupnost
            </h3>

            <p className="text-slate-600">
              Kontinuirana dostupnost proizvoda i efikasna isporuka.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              💰 Odličan odnos cene i kvaliteta
            </h3>

            <p className="text-slate-600">
              Pouzdani proizvodi po konkurentnim cenama.
            </p>
          </div>
        </div>
      </section>

{/* NAS ASORTIMAN */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-slate-900">
      Naš asortiman
    </h2>

    <p className="text-slate-500 mt-4">
      Kategorije proizvoda dostupne u ADFIL ponudi.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
    <h3 className="text-2xl font-bold text-slate-900 mb-4">
      🔧 Filteri
    </h3>

    <ul className="space-y-2 text-slate-600">
      <li>• Filteri goriva</li>
      <li>• Filteri ulja</li>
      <li>• Filteri polena</li>
      <li>• Filteri vazduha</li>
    </ul>
  </div>

  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
    <h3 className="text-2xl font-bold text-slate-900 mb-4">
      💡 Sijalice
    </h3>

    <ul className="space-y-2 text-slate-600">
      <li>• Obične sijalice</li>
      <li>• LED sijalice</li>
    </ul>
  </div>

</div>
</section>
    </main>
  );
}