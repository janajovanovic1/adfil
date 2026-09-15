"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";

const filterTypes = [
  "Svi",
  "Filter ulja",
  "Filter goriva",
  "Filter polena",
  "Filter vazduha",
];

export default function FilteriPage() {
  const [selectedFilter, setSelectedFilter] = useState("Svi");

  const filterProducts = Object.values(products).filter((product) => {
    // Prikazujemo samo proizvode koji pripadaju grupi filtera
    if (product.kategorija !== "Filteri") {
      return false;
    }

    // Ako je izabrano "Svi", prikazujemo sve filtere
    if (selectedFilter === "Svi") {
      return true;
    }

    // Filtriranje po vrsti filtera
    return product.naziv === selectedFilter;
  });

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-slate-900 text-white relative overflow-hidden">

        {/* Dekorativni krugovi */}
        <div className="absolute right-[-120px] top-[-150px] w-[520px] h-[520px] border border-slate-700 rounded-full opacity-60" />

        <div className="absolute right-[20px] top-[30px] w-[360px] h-[360px] border border-[#9BBC5C]/30 rounded-full" />

        <div className="absolute right-[100px] top-[110px] w-[200px] h-[200px] border border-[#9BBC5C]/20 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative">

          {/* Nazad */}
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#9BBC5C] transition text-sm mb-12"
          >
            ← Nazad na katalog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#9BBC5C]" />

            <p className="text-[#9BBC5C] font-semibold tracking-[0.25em] text-sm">
              ADFIL KATALOG
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Filteri
          </h1>

          <p className="text-slate-300 text-lg mt-5 max-w-2xl leading-8">
            Pogledajte ADFIL ponudu filtera za različite sisteme i potrebe
            vozila.
          </p>

        </div>
      </section>


      {/* FILTERI */}
      <section className="max-w-7xl mx-auto px-6 pt-14">

        <div className="flex flex-wrap gap-3">

          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedFilter(type)}
              className={`px-5 py-3 rounded-lg font-semibold text-sm transition ${
                selectedFilter === type
                  ? "bg-[#9BBC5C] text-slate-900"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {type}
            </button>
          ))}

        </div>

      </section>


      {/* PROIZVODI */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-end justify-between mb-8">

          <div>
            <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
              ADFIL FILTERI
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              {selectedFilter === "Svi"
                ? "Svi filteri"
                : selectedFilter}
            </h2>
          </div>

          <p className="text-slate-400 text-sm">
            {filterProducts.length}{" "}
            {filterProducts.length === 1
              ? "proizvod"
              : "proizvoda"}
          </p>

        </div>


        {filterProducts.length > 0 ? (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filterProducts.map((product) => (

              <Link
                key={product.sifra}
                href={`/katalog/${product.sifra.toLowerCase()}`}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                {/* SLIKA */}
                <div className="h-64 bg-slate-100 flex items-center justify-center p-8">

                  <Image
                    src={product.slika}
                    alt={`ADFIL ${product.naziv}`}
                    width={300}
                    height={250}
                    className="max-h-52 w-auto object-contain group-hover:scale-105 transition duration-300"
                  />

                </div>


                {/* INFORMACIJE */}
                <div className="p-6">

                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    {product.kategorija}
                  </p>

                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {product.naziv}
                  </h3>

                  <p className="text-slate-500 mt-3 leading-6 line-clamp-2">
                    {product.opis}
                  </p>


                  <div className="border-t border-slate-100 mt-5 pt-4 flex items-end justify-between">

                    <div>
                      <p className="text-sm text-slate-400">
                        Šifra proizvoda
                      </p>

                      <p className="font-semibold text-slate-700 mt-1">
                        {product.sifra}
                      </p>
                    </div>

                    <span className="text-[#9BBC5C] font-bold text-2xl group-hover:translate-x-1 transition">
                      →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          /* AKO NEMA PROIZVODA */
          <div className="border border-slate-200 rounded-2xl p-12 text-center">

            <p className="text-slate-400 text-lg">
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
                Filteri ulja
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                Filteri namenjeni filtraciji motornog ulja i zaštiti
                sistema podmazivanja.
              </p>
            </div>


            <div>
              <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                02
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-2">
                Filteri vazduha
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                Proizvodi namenjeni efikasnoj filtraciji vazduha i
                pouzdanom radu motora.
              </p>
            </div>


            <div>
              <p className="text-[#9BBC5C] font-bold text-sm tracking-widest">
                03
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-2">
                ADFIL kvalitet
              </h3>

              <p className="text-slate-500 mt-3 leading-7">
                Fokus na pouzdanost, kvalitet i dobar odnos cene i
                performansi.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}