import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-slate-900 text-white relative overflow-hidden">

        {/* Dekorativni krugovi */}
        <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] border border-slate-700 rounded-full opacity-60" />
        <div className="absolute right-[20px] top-[20px] w-[350px] h-[350px] border border-[#9BBC5C]/30 rounded-full" />
        <div className="absolute right-[90px] top-[90px] w-[210px] h-[210px] border border-[#9BBC5C]/20 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-16 relative">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#9BBC5C]" />

              <p className="text-[#9BBC5C] font-semibold tracking-[0.25em] text-sm">
                KONTAKT
              </p>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none">
              Kontakt
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold mt-6 leading-tight">
              Razgovarajmo o
              <br />
              <span className="text-[#9BBC5C]">
                saradnji.
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-8 max-w-2xl mt-6">
              Za informacije o proizvodima, dostupnosti i mogućnostima
              poslovne saradnje, kontaktirajte ADFIL tim.
            </p>

          </div>

        </div>
      </section>


      {/* KONTAKT SADRŽAJ */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEVA STRANA */}
          <div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#9BBC5C]" />

              <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                JAVITE NAM SE
              </p>
            </div>

            <h2 className="text-4xl font-bold text-slate-900">
              Tu smo za vas.
            </h2>

            <p className="text-slate-500 text-lg leading-7 mt-5 max-w-lg">
              Bilo da želite više informacija o našim proizvodima,
              proveru dostupnosti ili želite da razgovaramo o poslovnoj
              saradnji, slobodno nam se obratite.
            </p>


            {/* KONTAKT PODACI */}
            <div className="mt-10 space-y-6">

              <div className="flex gap-5 items-start">

                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                  <span className="text-[#9BBC5C] text-xl">
                    @
                  </span>
                </div>

                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest">
                    Email
                  </p>

                  <p className="text-lg font-semibold text-slate-900 mt-1">
                    info@adfil.rs
                  </p>
                </div>

              </div>


              <div className="flex gap-5 items-start">

                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                  <span className="text-[#9BBC5C] text-xl">
                    ☎
                  </span>
                </div>

                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest">
                    Telefon
                  </p>

                  <p className="text-lg font-semibold text-slate-900 mt-1">
                    +381 XX XXX XXXX
                  </p>
                </div>

              </div>


              <div className="flex gap-5 items-start">

                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                  <span className="text-[#9BBC5C] text-xl">
                    ●
                  </span>
                </div>

                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest">
                    Lokacija
                  </p>

                  <p className="text-lg font-semibold text-slate-900 mt-1">
                    Srbija
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* FORMA */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10">

            <div className="mb-8">

              <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                POŠALJITE UPIT
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-2">
                Kontakt forma
              </h2>

              <p className="text-slate-500 mt-3">
                Popunite formu i kontaktiraćemo vas u najkraćem roku.
              </p>

            </div>


            <form className="space-y-5">

              {/* IME */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Ime i prezime
                </label>

                <input
                  type="text"
                  placeholder="Vaše ime i prezime"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#9BBC5C] focus:ring-1 focus:ring-[#9BBC5C]"
                />
              </div>


              {/* EMAIL */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="vas@email.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#9BBC5C] focus:ring-1 focus:ring-[#9BBC5C]"
                />
              </div>


              {/* TELEFON */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Telefon
                </label>

                <input
                  type="tel"
                  placeholder="+381"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#9BBC5C] focus:ring-1 focus:ring-[#9BBC5C]"
                />
              </div>


              {/* PORUKA */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Poruka
                </label>

                <textarea
                  rows={5}
                  placeholder="Unesite poruku..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none resize-none focus:border-[#9BBC5C] focus:ring-1 focus:ring-[#9BBC5C]"
                />
              </div>


              {/* DUGME */}
              <button
                type="submit"
                className="w-full bg-[#9BBC5C] text-slate-900 py-3.5 rounded-lg font-bold hover:opacity-90 transition"
              >
                Pošalji upit
              </button>

            </form>

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
                Tražite pouzdanog partnera?
              </h2>

              <p className="text-slate-400 mt-3 max-w-xl">
                Obratite nam se i saznajte više o ADFIL asortimanu
                i mogućnostima saradnje.
              </p>

            </div>

            <Link
              href="/katalog"
              className="border border-slate-600 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition whitespace-nowrap"
            >
              Pogledaj katalog
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}