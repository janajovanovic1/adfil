import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-slate-900 text-white relative overflow-hidden">
        {/* Dekorativni elementi */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="absolute right-20 top-20 w-72 h-72 border border-[#9BBC5C] rounded-full" />
          <div className="absolute right-36 top-36 w-40 h-40 border border-[#9BBC5C] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-14 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEVA STRANA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#9BBC5C]" />
                <p className="text-[#9BBC5C] font-semibold tracking-[0.25em] text-sm">
                  QUALITY AUTO PARTS
                </p>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none">
                ADFIL
              </h1>

              <h2 className="text-3xl md:text-4xl font-semibold mt-6 leading-tight">
                Kvalitetni filteri
                <br />
                <span className="text-[#9BBC5C]">
                  i auto delovi.
                </span>
              </h2>

              <p className="text-slate-300 text-lg leading-8 max-w-xl mt-7">
                Pouzdani proizvodi za različite modele vozila,
                razvijeni sa fokusom na kvalitet, dostupnost
                i dugoročnu pouzdanost.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/katalog"
                  className="bg-[#9BBC5C] text-slate-900 px-7 py-3.5 rounded-lg font-bold hover:opacity-90 transition"
                >
                  Pogledaj katalog
                </Link>

                <Link
                  href="/kontakt"
                  className="border border-slate-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
                >
                  Kontakt
                </Link>
              </div>
            </div>

            {/* DESNA STRANA - VIZUELNI ELEMENT */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-[420px] h-[420px]">

                <div className="absolute inset-8 border border-slate-700 rounded-full" />

                <div className="absolute inset-20 border border-[#9BBC5C]/40 rounded-full" />

                <div className="absolute inset-32 bg-[#9BBC5C] rounded-full opacity-10" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[#9BBC5C] text-sm font-semibold tracking-[0.3em]">
                      ADFIL
                    </p>

                    <p className="text-slate-400 text-xs tracking-widest mt-2">
                      QUALITY PARTS
                    </p>
                  </div>
                </div>

                <div className="absolute top-12 right-8 w-3 h-3 bg-[#9BBC5C] rounded-full" />
                <div className="absolute bottom-16 left-10 w-2 h-2 bg-[#9BBC5C] rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* UVODNI RED */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                01
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Proveren kvalitet
              </h3>
              <p className="text-slate-500 mt-2 leading-6">
                Proizvodi odabrani sa fokusom na pouzdanost i kvalitet.
              </p>
            </div>

            <div>
              <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                02
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Širok asortiman
              </h3>
              <p className="text-slate-500 mt-2 leading-6">
                Filteri i auto-delovi za veliki broj modela vozila.
              </p>
            </div>

            <div>
              <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                03
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Pouzdana dostupnost
              </h3>
              <p className="text-slate-500 mt-2 leading-6">
                Fokus na kontinuiranu dostupnost i efikasnu isporuku.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ZASTO ADFIL */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9BBC5C]" />
            <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
              ZAŠTO ADFIL
            </p>
          </div>

          <h2 className="text-4xl font-bold text-slate-900">
            Partner na koji
            <span className="text-[#9BBC5C]"> možete računati.</span>
          </h2>

          <p className="text-slate-500 text-lg mt-5 leading-7">
            ADFIL gradimo kao pouzdan brend auto-delova,
            sa fokusom na kvalitet proizvoda i dugoročne
            poslovne odnose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="group border border-slate-200 rounded-2xl p-8 hover:border-[#9BBC5C] hover:shadow-lg transition">
            <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
              QUALITY
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-3">
              Proveren kvalitet
            </h3>

            <p className="text-slate-500 mt-3 leading-7">
              Pažljiv izbor proizvoda i proizvođača sa ciljem
              da se obezbedi pouzdano rešenje za krajnje korisnike
              i poslovne partnere.
            </p>
          </div>

          <div className="group border border-slate-200 rounded-2xl p-8 hover:border-[#9BBC5C] hover:shadow-lg transition">
            <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
              PARTNERSHIP
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-3">
              Dugoročna saradnja
            </h3>

            <p className="text-slate-500 mt-3 leading-7">
              Gradimo odnose sa proizvođačima, distributerima
              i kupcima zasnovane na poverenju i pouzdanosti.
            </p>
          </div>

        </div>
      </section>


      {/* ASORTIMAN */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#9BBC5C]" />
                <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  ASORTIMAN
                </p>
              </div>

              <h2 className="text-4xl font-bold">
                Naši proizvodi
              </h2>
            </div>

            <Link
              href="/katalog"
              className="text-[#9BBC5C] font-semibold hover:text-white transition"
            >
              Pogledaj ceo katalog →
            </Link>

          </div>


          <div className="grid md:grid-cols-2 gap-6">

            {/* FILTERI */}
            
            <div className="border border-slate-700 rounded-2xl p-8 hover:border-[#9BBC5C] transition">

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  Filteri
                </h3>

                <span className="text-[#9BBC5C] text-3xl">
                  01
                </span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-y-3 text-slate-300">
                <p>→ Filteri goriva</p>
                <p>→ Filteri ulja</p>
                <p>→ Filteri polena</p>
                <p>→ Filteri vazduha</p>
              </div>

            </div>


            {/* SIJALICE */}
            <div className="border border-slate-700 rounded-2xl p-8 hover:border-[#9BBC5C] transition">

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  Sijalice
                </h3>

                <span className="text-[#9BBC5C] text-3xl">
                  02
                </span>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-y-3 text-slate-300">
                
                <p>→ LED sijalice</p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="bg-[#9BBC5C] rounded-2xl px-8 md:px-12 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>
              <p className="text-slate-900 font-bold tracking-widest text-sm">
                ADFIL
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Zainteresovani za saradnju?
              </h2>

              <p className="text-slate-800 mt-3 max-w-xl">
                Kontaktirajte nas za više informacija o proizvodima,
                asortimanu i poslovnoj saradnji.
              </p>
            </div>

            <Link
              href="/kontakt"
              className="bg-slate-900 text-white px-7 py-3.5 rounded-lg font-bold hover:bg-slate-800 transition whitespace-nowrap"
            >
              Kontaktirajte nas
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}