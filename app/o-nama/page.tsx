export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-slate-900 text-white relative overflow-hidden">

        {/* Dekorativni krugovi */}
        <div className="absolute right-[-80px] top-[-80px] w-[500px] h-[500px] border border-slate-700 rounded-full opacity-60" />
        <div className="absolute right-[40px] top-[40px] w-[340px] h-[340px] border border-[#9BBC5C]/30 rounded-full" />
        <div className="absolute right-[110px] top-[110px] w-[200px] h-[200px] border border-[#9BBC5C]/20 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-16 relative">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#9BBC5C]" />

              <p className="text-[#9BBC5C] font-semibold tracking-[0.25em] text-sm">
                O NAMA
              </p>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none">
                ADFIL
              </h1>

            <h2 className="text-3xl md:text-4xl font-semibold mt-5 leading-tight">
              Kvalitet koji
              <br />
              <span className="text-[#9BBC5C]">
                gradi poverenje.
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-8 max-w-2xl mt-6">
              ADFIL je brend auto-delova usmeren na kvalitetne proizvode,
              pouzdanu dostupnost i dugoročne odnose sa poslovnim partnerima.
            </p>

          </div>

        </div>
      </section>


      {/* KO SMO MI */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#9BBC5C]" />

              <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                KO SMO MI
              </p>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Brend razvijen sa
              <br />
              <span className="text-[#9BBC5C]">
                jasnim ciljem.
              </span>
            </h2>

          </div>


          <div className="text-slate-600 text-lg leading-8">

            <p className="mb-5">
              ADFIL je brend posvećen razvoju i distribuciji kvalitetnih
              auto-delova, sa posebnim fokusom na filtere i sijalice.
            </p>

            <p className="mb-5">
              Naš pristup zasniva se na pažljivom izboru proizvoda,
              pouzdanoj saradnji sa proizvođačima i razumevanju potreba
              tržišta auto-delova.
            </p>

            <p>
              Cilj nam je da izgradimo prepoznatljiv brend koji svojim
              partnerima pruža kvalitet, dostupnost i pouzdanost na
              duži rok.
            </p>

          </div>

        </div>

      </section>


      {/* NASI PRINCIPI */}
      <section className="bg-slate-50 border-y border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-2xl mb-12">

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#9BBC5C]" />

              <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                NAŠI PRINCIPI
              </p>
            </div>

            <h2 className="text-4xl font-bold text-slate-900">
              Na čemu gradimo
              <span className="text-[#9BBC5C]"> ADFIL?</span>
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            {/* 01 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#9BBC5C] hover:shadow-lg transition">

              <div className="flex justify-between items-start">

                <span className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  01
                </span>

                <span className="text-slate-300 text-2xl">
                  +
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8">
                Kvalitet
              </h3>

              <p className="text-slate-500 mt-4 leading-7">
                Pažljiv izbor proizvoda i proizvođača sa fokusom na
                pouzdanost i kvalitet.
              </p>

            </div>


            {/* 02 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#9BBC5C] hover:shadow-lg transition">

              <div className="flex justify-between items-start">

                <span className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  02
                </span>

                <span className="text-slate-300 text-2xl">
                  +
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8">
                Pouzdanost
              </h3>

              <p className="text-slate-500 mt-4 leading-7">
                Posvećenost stabilnoj ponudi, dostupnosti proizvoda i
                pouzdanoj saradnji.
              </p>

            </div>


            {/* 03 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#9BBC5C] hover:shadow-lg transition">

              <div className="flex justify-between items-start">

                <span className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  03
                </span>

                <span className="text-slate-300 text-2xl">
                  +
                </span>

              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8">
                Partnerstvo
              </h3>

              <p className="text-slate-500 mt-4 leading-7">
                Gradimo dugoročne odnose sa kupcima, distributerima i
                proizvođačima zasnovane na poverenju.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* VIZIJA */}
      <section className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-[#9BBC5C]" />

                <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  NAŠA VIZIJA
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Postati prepoznatljiv
                <br />
                <span className="text-[#9BBC5C]">
                  brend auto-delova.
                </span>
              </h2>

            </div>


            <div>

              <p className="text-slate-300 text-lg leading-8">
                Gradimo ADFIL kao moderan i pouzdan brend koji povezuje
                kvalitetne proizvode, pouzdanu nabavku i efikasnu
                distribuciju.
              </p>

              <p className="text-slate-400 leading-7 mt-5">
                Dugoročni cilj je stvaranje stabilne mreže poslovnih
                partnera i asortimana koji odgovara potrebama savremenog
                tržišta auto-delova.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ZAVRSNA SEKCIJA */}
      <section className="bg-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="border-l-4 border-[#9BBC5C] pl-7">

            <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase">
              ADFIL
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Quality Auto Parts.
            </h2>

            <p className="text-slate-500 text-lg mt-3">
              Kvalitet, pouzdanost i partnerstvo.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}