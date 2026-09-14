import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

type Props = {
  params: Promise<{
    sifra: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { sifra: rawSifra } = await params;

const sifra = rawSifra.toLowerCase().trim();

const product = products[sifra as keyof typeof products];

if (!product) {
  return (
    <div className="p-10 text-red-600">
      Proizvod nije pronađen. Šifra: {sifra}
    </div>
  );
}
return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-slate-900 text-white relative overflow-hidden">

        {/* Dekorativni krugovi */}
        <div className="absolute right-[-100px] top-[-120px] w-[500px] h-[500px] border border-slate-700 rounded-full opacity-60" />

        <div className="absolute right-[30px] top-[30px] w-[350px] h-[350px] border border-[#9BBC5C]/30 rounded-full" />

        <div className="absolute right-[100px] top-[100px] w-[210px] h-[210px] border border-[#9BBC5C]/20 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-16 relative">

          {/* Breadcrumb */}
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#9BBC5C] transition text-sm mb-10"
          >
            ← Nazad na katalog
          </Link>

          <div className="flex items-center gap-3 mb-5">

            <div className="w-10 h-[2px] bg-[#9BBC5C]" />

            <p className="text-[#9BBC5C] font-semibold tracking-[0.25em] text-sm">
              ADFIL {product.kategorija.toUpperCase()}
            </p>

          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            {product.naziv}
          </h1>

          <p className="text-slate-300 text-lg mt-4">
            ADFIL {product.sifra}
          </p>

        </div>
      </section>


      {/* DETALJI PROIZVODA */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* SLIKA */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl min-h-[500px] flex items-center justify-center p-10">

            <Image
              src={product.slika}
              alt={`ADFIL ${product.naziv} ${product.sifra}`}
              width={600}
              height={600}
              className="max-h-[430px] w-auto object-contain"
            />

          </div>


          {/* INFORMACIJE */}
          <div>

            <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
              {product.kategorija}
            </p>

            <h2 className="text-4xl font-bold text-slate-900 mt-3">
              {product.naziv}
            </h2>

            <p className="text-slate-500 text-lg leading-8 mt-6">
              {product.opis}
            </p>


            {/* INFORMACIJE */}
            <div className="border border-slate-200 rounded-2xl mt-10 overflow-hidden">

              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">

                <h3 className="font-bold text-slate-900">
                  Informacije o proizvodu
                </h3>

              </div>


              <div className="divide-y divide-slate-100">

                <div className="flex justify-between gap-6 px-6 py-5">
                  <span className="text-slate-400">
                    Kategorija
                  </span>

                  <span className="font-semibold text-slate-700">
                    {product.kategorija}
                  </span>
                </div>


                <div className="flex justify-between gap-6 px-6 py-5">
                  <span className="text-slate-400">
                    Tip proizvoda
                  </span>

                  <span className="font-semibold text-slate-700">
                    {product.naziv}
                  </span>
                </div>


                <div className="flex justify-between gap-6 px-6 py-5">
                  <span className="text-slate-400">
                    ADFIL šifra
                  </span>

                  <span className="font-semibold text-slate-700">
                    {product.sifra}
                  </span>
                </div>


                <div className="flex justify-between gap-6 px-6 py-5">
                  <span className="text-slate-400">
                    OEM broj
                  </span>

                  <span className="font-semibold text-slate-700">
                    {product.oem}
                  </span>
                </div>


                <div className="flex justify-between gap-6 px-6 py-5">

                  <span className="text-slate-400">
                    Vozila
                  </span>

                  <span className="font-semibold text-slate-700">
                    {product.vozila}
                  </span>

                </div>

              </div>

            </div>


            {/* REFERENCE DRUGIH PROIZVOĐAČA */}
            <div className="border border-slate-200 rounded-2xl mt-6 overflow-hidden">

              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">

                <h3 className="font-bold text-slate-900">
                  Šifre drugih proizvođača
                </h3>

              </div>

              <div className="divide-y divide-slate-100">

                {product.reference.map((reference) => (

                  <div
                    key={reference}
                    className="px-6 py-4 text-slate-700 font-semibold"
                  >
                    {reference}
                  </div>

                ))}

              </div>

            </div>


            {/* TEHNIČKE SPECIFIKACIJE */}
            <div className="border border-slate-200 rounded-2xl mt-6 overflow-hidden">

              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">

                <h3 className="font-bold text-slate-900">
                  Tehničke informacije
                </h3>

              </div>

              <div className="divide-y divide-slate-100">

                {product.specifikacije.map(([naziv, vrednost]) => (

                  <div
                    key={naziv}
                    className="flex justify-between gap-6 px-6 py-4"
                  >

                    <span className="text-slate-500">
                      {naziv}
                    </span>

                    <span className="font-semibold text-slate-700 text-right">
                      {vrednost}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* KONTAKT */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <Link
                href="/kontakt"
                className="bg-[#9BBC5C] text-slate-900 px-7 py-4 rounded-lg font-bold text-center hover:opacity-90 transition"
              >
                Kontaktirajte nas
              </Link>

              <Link
                href="/katalog"
                className="border border-slate-300 text-slate-700 px-7 py-4 rounded-lg font-bold text-center hover:border-[#9BBC5C] hover:text-[#9BBC5C] transition"
              >
                Nazad na katalog
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* DONJI INFO DEO */}
      <section className="bg-slate-50 border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-3 gap-8">

            <div>

              <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                01
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Pouzdana filtracija
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                Proizvod razvijen sa fokusom na kvalitet i pouzdanu
                funkciju u sistemu vozila.
              </p>

            </div>


            <div>

              <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                02
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-2">
                ADFIL kvalitet
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                ADFIL proizvodi nastaju sa fokusom na pouzdanost,
                dostupnost i odnos kvaliteta i cene.
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