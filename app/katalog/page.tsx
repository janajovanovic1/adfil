import Link from "next/link";

const categories = [
  {
    number: "01",
    name: "Filteri",
    description:
      "Filteri za pouzdanu zaštitu i pravilan rad različitih sistema vozila.",
    products: [
      "Filteri goriva",
      "Filteri ulja",
      "Filteri polena",
      "Filteri vazduha",
    ],
  },
  {
    number: "02",
    name: "Sijalice",
    description:
      "Standardne i LED sijalice za različite potrebe i modele vozila.",
    products: [
      "Obične sijalice",
      "LED sijalice",
    ],
  },
];

export default function CatalogPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-slate-900 text-white relative overflow-hidden">

        {/* Dekorativni elementi */}
        <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] border border-slate-700 rounded-full opacity-60" />
        <div className="absolute right-[20px] top-[20px] w-[350px] h-[350px] border border-[#9BBC5C]/30 rounded-full" />
        <div className="absolute right-[90px] top-[90px] w-[210px] h-[210px] border border-[#9BBC5C]/20 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-12 relative">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#9BBC5C]" />

              <p className="text-[#9BBC5C] font-semibold tracking-[0.25em] text-sm">
                ADFIL CATALOG
              </p>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none">
              Katalog
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold mt-6 leading-tight">
              Kvalitetni delovi.
              <br />
              <span className="text-[#9BBC5C]">
                Pouzdana ponuda.
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-8 max-w-2xl mt-6">
              Pregled ADFIL asortimana auto-delova. Naša ponuda se
              kontinuirano razvija u skladu sa potrebama tržišta.
            </p>

          </div>

        </div>
      </section>


      {/* KATEGORIJE */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-2xl mb-12">

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9BBC5C]" />

            <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
              ASORTIMAN
            </p>
          </div>

          <h2 className="text-4xl font-bold text-slate-900">
            Izaberite kategoriju
          </h2>

          <p className="text-slate-500 text-lg mt-4 leading-7">
            Trenutni asortiman ADFIL-a obuhvata osnovne kategorije
            proizvoda koje postepeno širimo.
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-8">

          {categories.map((category) => (
            <div
              key={category.number}
              className="group border border-slate-200 rounded-2xl p-8 hover:border-[#9BBC5C] hover:shadow-xl transition"
            >

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                    KATEGORIJA
                  </p>

                  <h3 className="text-3xl font-bold text-slate-900 mt-2">
                    {category.name}
                  </h3>
                </div>

                <span className="text-4xl font-bold text-slate-100 group-hover:text-[#9BBC5C]/30 transition">
                  {category.number}
                </span>

              </div>


              <p className="text-slate-500 leading-7 mt-6">
                {category.description}
              </p>


              <div className="border-t border-slate-100 mt-7 pt-6">

                <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">
                  Proizvodi
                </p>

                <div className="grid grid-cols-2 gap-y-3">

                  {category.products.map((product) => (
                    <p
                      key={product}
                      className="text-slate-700 font-medium"
                    >
                      <span className="text-[#9BBC5C] mr-2">
                        →
                      </span>
                      {product}
                    </p>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* PROIZVODI - PLACEHOLDER */}
      <section className="bg-slate-50 border-y border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="flex items-end justify-between mb-10">

            <div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#9BBC5C]" />

                <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  PROIZVODI
                </p>
              </div>

              <h2 className="text-4xl font-bold text-slate-900">
                ADFIL proizvodi
              </h2>

            </div>

            <p className="hidden md:block text-sm text-slate-400">
              Katalog se kontinuirano ažurira
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            
            {/* PROIZVOD 1 */}
<Link
  href="/katalog/ad-4216"
  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#9BBC5C] transition block"
>

  <div className="h-52 bg-slate-100 flex items-center justify-center p-6">

    <img
      src="/images/products/filteri/ad-4216.png"
      alt="ADFIL filter ulja AD-4216"
      className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
    />

  </div>


  <div className="p-6">

    <p className="text-xs text-[#9BBC5C] uppercase tracking-widest font-semibold">
      Filteri
    </p>

    <h3 className="text-xl font-bold text-slate-900 mt-2">
      Filter ulja
    </h3>

    <p className="text-slate-500 mt-3 leading-6">
      Kvalitetan filter ulja namenjen pouzdanoj filtraciji
      motornog ulja i zaštiti motora.
    </p>


    <div className="border-t border-slate-100 mt-5 pt-4">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-sm text-slate-400">
            Šifra proizvoda
          </p>

          <p className="font-semibold text-slate-700 mt-1">
            AD-4216
          </p>
        </div>

        <span className="text-[#9BBC5C] font-bold text-xl group-hover:translate-x-1 transition">
          →
        </span>

      </div>

    </div>

  </div>

</Link>


           
  {/* PROIZVOD 2 */}
<Link
  href="/katalog/ad-9072"
  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#9BBC5C] transition block"
>

  <div className="h-52 bg-slate-100 flex items-center justify-center p-6">

    <img
      src="/images/products/filteri/ad-9072.png"
      alt="ADFIL filter vazduha AD-9072"
      className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
    />

  </div>

  <div className="p-6">

    <p className="text-xs text-[#9BBC5C] uppercase tracking-widest font-semibold">
      Filteri
    </p>

    <h3 className="text-xl font-bold text-slate-900 mt-2">
      Filter vazduha
    </h3>

    <p className="text-slate-500 mt-3 leading-6">
      ADFIL filter vazduha namenjen je efikasnoj filtraciji
      vazduha i pouzdanom radu motora.
    </p>

    <div className="border-t border-slate-100 mt-5 pt-4">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-sm text-slate-400">
            Šifra proizvoda
          </p>

          <p className="font-semibold text-slate-700 mt-1">
            AD-9072
          </p>
        </div>

        <span className="text-[#9BBC5C] font-bold text-xl group-hover:translate-x-1 transition">
          →
        </span>

      </div>

    </div>

  </div>

</Link>


            {/* PROIZVOD 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition">

              <div className="h-52 bg-slate-100 flex items-center justify-center">

                <div className="text-center">

                  <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                    ADFIL
                  </p>

                  <p className="text-slate-400 text-sm mt-2">
                    LED
                  </p>

                </div>

              </div>


              <div className="p-6">

                <p className="text-xs text-slate-400 uppercase tracking-widest">
                  Sijalice
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  LED sijalica
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  LED sijalica namenjena različitim potrebama vozila.
                </p>

                <div className="border-t border-slate-100 mt-5 pt-4">

                  <p className="text-sm text-slate-400">
                    Šifra proizvoda
                  </p>

                  <p className="font-semibold text-slate-700 mt-1">
                    ADF-003
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* B2B CTA */}
      <section className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>

              <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                POSLOVNA SARADNJA
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Potrebne su vam dodatne informacije?
              </h2>

              <p className="text-slate-400 mt-3 max-w-xl">
                Kontaktirajte nas za informacije o proizvodima,
                dostupnosti i mogućnostima saradnje.
              </p>

            </div>

            <Link
              href="/kontakt"
              className="bg-[#9BBC5C] text-slate-900 px-7 py-3.5 rounded-lg font-bold hover:opacity-90 transition whitespace-nowrap"
            >
              Kontaktirajte nas
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}