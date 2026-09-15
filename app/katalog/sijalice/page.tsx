import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function BulbsPage() {
  // Automatski uzima sve proizvode iz kategorije "Sijalice"
  const bulbs = Object.values(products).filter(
    (product) => product.kategorija === "Sijalice"
  );

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-slate-900 text-white relative overflow-hidden">

        {/* Dekorativni krugovi */}
        <div className="absolute right-[-100px] top-[-120px] w-[500px] h-[500px] border border-slate-700 rounded-full opacity-60" />

        <div className="absolute right-[30px] top-[30px] w-[350px] h-[350px] border border-[#9BBC5C]/30 rounded-full" />

        <div className="absolute right-[100px] top-[100px] w-[210px] h-[210px] border border-[#9BBC5C]/20 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-16 relative">

          {/* Nazad */}
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#9BBC5C] transition text-sm mb-10"
          >
            ← Nazad na katalog
          </Link>

          <div className="flex items-center gap-3 mb-5">

            <div className="w-10 h-[2px] bg-[#9BBC5C]" />

            <p className="text-[#9BBC5C] font-semibold tracking-[0.25em] text-sm">
              ADFIL SIJALICE
            </p>

          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Sijalice
          </h1>

          <p className="text-slate-300 text-lg mt-4 max-w-2xl">
            Pregled ADFIL sijalica za različite potrebe automobilske rasvete.
          </p>

        </div>
      </section>


      {/* PROIZVODI */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* NASLOV */}
        <div className="flex items-end justify-between mb-8">

          <div>

            <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
              ADFIL ASORTIMAN
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Sijalice
            </h2>

          </div>

          <p className="text-sm text-slate-400">
            {bulbs.length}{" "}
            {bulbs.length === 1 ? "proizvod" : "proizvoda"}
          </p>

        </div>


        {/* MREŽA PROIZVODA */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {bulbs.map((bulb) => (

            <Link
              key={bulb.sifra}
              href={`/katalog/${bulb.sifra.toLowerCase()}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#9BBC5C] transition"
            >

              {/* SLIKA */}
              <div className="h-56 bg-slate-100 flex items-center justify-center p-6">

                <Image
                  src={bulb.slika}
                  alt={`ADFIL ${bulb.naziv}`}
                  width={300}
                  height={220}
                  className="max-h-48 w-auto object-contain group-hover:scale-105 transition duration-300"
                />

              </div>


              {/* INFORMACIJE */}
              <div className="p-6">

                <p className="text-xs text-[#9BBC5C] uppercase tracking-widest font-semibold">
                  Sijalice
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  {bulb.naziv}
                </h3>

                <p className="text-slate-500 mt-3 leading-6">
                  {bulb.opis}
                </p>


                {/* ŠIFRA + STRELICA */}
                <div className="border-t border-slate-100 mt-5 pt-4">

                  <div className="flex justify-between items-center">

                    <div>

                      <p className="text-sm text-slate-400">
                        Šifra proizvoda
                      </p>

                      <p className="font-semibold text-slate-700 mt-1">
                        {bulb.sifra}
                      </p>

                    </div>

                    <span className="text-[#9BBC5C] font-bold text-2xl group-hover:translate-x-1 transition">
                      →
                    </span>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>


        {/* AKO NEMA PROIZVODA */}
        {bulbs.length === 0 && (

          <div className="border border-slate-200 rounded-2xl p-10 text-center">

            <p className="text-slate-500">
              Trenutno nema proizvoda u ovoj kategoriji.
            </p>

          </div>

        )}

      </section>


      {/* DONJI INFO */}
      <section className="bg-slate-50 border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-3 gap-8">

            <div>

              <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                01
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Moderna rasveta
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                LED sijalice namenjene unapređenju automobilske rasvete
                i vidljivosti.
              </p>

            </div>


            <div>

              <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                02
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Različiti tipovi
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                Ponuda sijalica obuhvata različite tipove i namenjene
                su različitim sistemima automobilske rasvete.
              </p>

            </div>


            <div>

              <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                03
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Dodatne informacije
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                Za informacije o primeni i dostupnosti proizvoda
                kontaktirajte ADFIL.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}