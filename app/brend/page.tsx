export default function BrandPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-slate-900 text-white relative overflow-hidden">

        {/* Dekorativni krugovi */}
        <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] border border-slate-700 rounded-full opacity-60" />
        <div className="absolute right-[20px] top-[20px] w-[350px] h-[350px] border border-[#9BBC5C]/30 rounded-full" />
        <div className="absolute right-[90px] top-[90px] w-[210px] h-[210px] border border-[#9BBC5C]/20 rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-12 relative">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#9BBC5C]" />

              <p className="text-[#9BBC5C] font-semibold tracking-[0.25em] text-sm">
                ADFIL STORY
              </p>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none">
              ADFIL
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold mt-6 leading-tight">
              Od iskustva do
              <br />
              <span className="text-[#9BBC5C]">
                sopstvenog brenda.
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-8 max-w-2xl mt-6">
              Priča o brendu koji je nastao iz više od decenije iskustva
              u automobilskoj industriji i želje da se kvalitetni
              auto-delovi učine dostupnijim.
            </p>

          </div>

        </div>
      </section>


      {/* UVOD */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#9BBC5C]" />

              <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                PRIČA O BRENDU
              </p>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Iskustvo koje je
              <br />
              postalo
              <span className="text-[#9BBC5C]"> ADFIL.</span>
            </h2>

          </div>


          <div className="text-slate-600 text-lg leading-8">

            <p className="mb-5">
              Priča o ADFIL-u počinje mnogo pre samog nastanka brenda.
              Osnivač kompanije SZTR Auto-Disk započeo je poslovanje
              2010. godine u Guči, gradeći tokom godina iskustvo,
              znanje i poverenje velikog broja zadovoljnih kupaca.
            </p>

            <p>
              Nakon 15 godina rada u automobilskoj industriji, stečeno
              iskustvo omogućilo je da se precizno prepoznaju potrebe
              tržišta i kvalitet koji je potreban savremenim vozilima.
            </p>

          </div>

        </div>

      </section>


      {/* TIMELINE */}
      <section className="bg-slate-50 border-y border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-2xl mb-16">

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#9BBC5C]" />

              <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                RAZVOJ BRENDA
              </p>
            </div>

            <h2 className="text-4xl font-bold text-slate-900">
              Put od iskustva
              <span className="text-[#9BBC5C]"> do ADFIL-a.</span>
            </h2>

          </div>


          <div className="relative">

            {/* Vertikalna linija */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-300 hidden md:block" />


            {/* 2010 */}
            <div className="relative flex gap-8 pb-14">

              <div className="relative z-10 w-10 h-10 rounded-full bg-[#9BBC5C] flex items-center justify-center shrink-0">
                <span className="text-slate-900 font-bold text-xs">
                  01
                </span>
              </div>

              <div className="max-w-3xl">

                <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  2010
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Početak poslovanja
                </h3>

                <p className="text-slate-500 leading-7 mt-3">
                  U Guči je osnovana kompanija SZTR Auto-Disk.
                  Godine poslovanja u automobilskoj industriji donose
                  dragoceno iskustvo, znanje i poverenje kupaca.
                </p>

              </div>

            </div>


            {/* 2024 */}
            <div className="relative flex gap-8 pb-14">

              <div className="relative z-10 w-10 h-10 rounded-full bg-[#9BBC5C] flex items-center justify-center shrink-0">
                <span className="text-slate-900 font-bold text-xs">
                  02
                </span>
              </div>

              <div className="max-w-3xl">

                <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  2024
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Prvi korak ka sopstvenom brendu
                </h3>

                <p className="text-slate-500 leading-7 mt-3">
                  Nakon dugogodišnjeg iskustva, usledila je poseta
                  sajmu u Kini i obilazak fabrika. Direktan kontakt
                  sa proizvođačima omogućio je detaljnije upoznavanje
                  sa procesom proizvodnje i kvalitetom proizvoda.
                </p>

              </div>

            </div>


            {/* 2025 */}
            <div className="relative flex gap-8 pb-14">

              <div className="relative z-10 w-10 h-10 rounded-full bg-[#9BBC5C] flex items-center justify-center shrink-0">
                <span className="text-slate-900 font-bold text-xs">
                  03
                </span>
              </div>

              <div className="max-w-3xl">

                <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  2025
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Nastanak ADFIL-a
                </h3>

                <p className="text-slate-500 leading-7 mt-3">
                  Nakon perioda ispitivanja i testiranja različitih
                  proizvoda, doneta je odluka o pokretanju sopstvenog
                  brenda — ADFIL.
                </p>

                <div className="mt-5 bg-white border border-slate-200 rounded-xl p-5">
                  <p className="text-sm text-slate-400 uppercase tracking-widest">
                    Ime brenda
                  </p>

                  <p className="text-slate-700 mt-2 leading-7">
                    <span className="font-bold text-slate-900">AD</span>
                    dolazi od naziva Auto-Disk, dok
                    <span className="font-bold text-slate-900"> FIL</span>
                    označava filtere, kategoriju od koje je
                    razvoj brenda započeo.
                  </p>
                </div>

              </div>

            </div>


            {/* 2026 */}
            <div className="relative flex gap-8 pb-14">

              <div className="relative z-10 w-10 h-10 rounded-full bg-[#9BBC5C] flex items-center justify-center shrink-0">
                <span className="text-slate-900 font-bold text-xs">
                  04
                </span>
              </div>

              <div className="max-w-3xl">

                <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  2026
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  Novi proizvodi i razvoj
                </h3>

                <p className="text-slate-500 leading-7 mt-3">
                  Asortimanu filtera pridružene su LED sijalice,
                  univerzalan proizvod koji je od početka 2026. godine
                  deo ponude ADFIL-a.
                </p>

                <p className="text-slate-500 leading-7 mt-3">
                  Istovremeno se testiraju i novi proizvodi, među kojima
                  su kočione pločice, metlice brisača i obloge volana.
                </p>

              </div>

            </div>


            {/* DANAS */}
            <div className="relative flex gap-8">

              <div className="relative z-10 w-10 h-10 rounded-full bg-slate-900 border-4 border-[#9BBC5C] flex items-center justify-center shrink-0">
                <span className="text-[#9BBC5C] font-bold text-xs">
                  05
                </span>
              </div>

              <div className="max-w-3xl">

                <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  DANAS
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-2">
                  ADFIL u fazi razvoja
                </h3>

                <p className="text-slate-500 leading-7 mt-3">
                  Danas je fokus na daljem razvoju brenda, digitalizaciji
                  i plasmanu proizvoda na srpsko tržište.
                </p>

                <p className="text-slate-500 leading-7 mt-3">
                  Posebnu vrednost predstavljaju odnosi sa mehaničarima
                  i poslovnim partnerima koji su imali priliku da se
                  lično uvere u kvalitet ADFIL proizvoda.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ZAŠTO ADFIL */}
      <section className="bg-slate-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px] bg-[#9BBC5C]" />

                <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
                  ZAŠTO ADFIL
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Kvalitetan proizvod.
                <br />
                <span className="text-[#9BBC5C]">
                  Pristupačnija cena.
                </span>
              </h2>

            </div>


            <div>

              <p className="text-slate-300 text-lg leading-8">
                Ideja iza ADFIL-a je jednostavna — ponuditi kvalitetne
                auto-delove po ceni koja je dostupnija kupcima.
              </p>

              <p className="text-slate-400 leading-7 mt-5">
                Verujemo da poreklo proizvoda samo po sebi ne određuje
                njegov kvalitet. Pažljiv izbor proizvođača, kontrola
                proizvoda i dugoročna saradnja predstavljaju osnovu
                našeg pristupa.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PARTNERI I KINA */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="md:col-span-2 bg-slate-50 rounded-2xl p-10 border border-slate-200">

            <p className="text-[#9BBC5C] font-bold tracking-widest text-sm">
              DIREKTNA SARADNJA
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-3">
              Od proizvođača do tržišta.
            </h2>

            <p className="text-slate-500 leading-7 mt-4 max-w-2xl">
              Od prvog odlaska u Kinu 2024. godine, ADFIL održava
              kontinuiran kontakt sa partnerima i proizvođačima.
              Tokom 2025. godine usledila je nova poseta, dok je
              planiran nastavak saradnje i novih poseta.
            </p>

          </div>


          <div className="bg-[#9BBC5C] rounded-2xl p-10 text-slate-900">

            <p className="font-bold tracking-widest text-sm">
              ADFIL
            </p>

            <p className="text-4xl font-bold mt-5">
              2010 → 2025
            </p>

            <p className="mt-4 leading-7">
              Više od decenije iskustva prethodilo je nastanku
              sopstvenog brenda.
            </p>

          </div>

        </div>

      </section>


      {/* ZAVRSNA PORUKA */}
      <section className="bg-slate-50 border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="border-l-4 border-[#9BBC5C] pl-7">

            <p className="text-slate-400 text-sm font-semibold tracking-widest uppercase">
              ADFIL
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Priča je tek počela.
            </h2>

            <p className="text-slate-500 text-lg mt-3 max-w-2xl">
              Nastavljamo da razvijamo asortiman, gradimo poverenje
              i pozicioniramo ADFIL na tržištu auto-delova.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}