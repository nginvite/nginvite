import CurrentYear from "@/components/CurrentYear";

const collections = [
  {
    number: "01",
    name: "The Wedding Collection",
    description: "Abadikan kisah cinta dalam desain yang elegan.",
    accent: "purple",
  },
  {
    number: "02",
    name: "The Floral Collection",
    description: "Sentuhan bunga untuk hari yang istimewa.",
    accent: "pink",
  },
  {
    number: "03",
    name: "The Minimal Collection",
    description: "Keindahan dalam kesederhanaan.",
    accent: "purple",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#211735]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#eee7f7] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="/"
            aria-label="NgInvite Home"
            className="text-3xl font-bold tracking-tight"
          >
            nginvite<span className="text-[#FE0072]">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#koleksi"
              className="transition-colors hover:text-[#6601FF]"
            >
              Koleksi
            </a>
            <a
              href="#tentang"
              className="transition-colors hover:text-[#6601FF]"
            >
              Tentang Kami
            </a>
            <a
              href="#cara-pesan"
              className="transition-colors hover:text-[#6601FF]"
            >
              Cara Pemesanan
            </a>
          </nav>

          <a
            href="#koleksi"
            className="rounded-full bg-[#6601FF] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#5200D6]"
          >
            Jelajahi Koleksi
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute -right-32 -top-24 -z-10 h-96 w-96 rounded-full bg-[#6601FF]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 -z-10 h-72 w-72 rounded-full bg-[#FE0072]/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-12 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6601FF]/15 bg-[#F8F5FF] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FE0072]" />
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6601FF]">
                Digital Invitations · Made with Love
              </p>
            </div>

            <h1 className="max-w-xl font-serif text-5xl leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
              Every love story deserves a{" "}
              <span className="bg-gradient-to-r from-[#6601FF] to-[#FE0072] bg-clip-text text-transparent">
                beautiful beginning.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-8 text-[#746B83]">
              Undangan digital yang dirancang dengan penuh perhatian untuk
              mengabadikan momen paling berarti dalam hidup Anda.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#koleksi"
                className="inline-flex items-center gap-2 rounded-full bg-[#6601FF] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#6601FF]/20 transition hover:-translate-y-0.5 hover:bg-[#5200D6]"
              >
                Temukan Undangan
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#tentang"
                className="rounded-full border border-[#eee7f7] px-6 py-3.5 text-sm font-medium transition hover:border-[#6601FF] hover:text-[#6601FF]"
              >
                Kenali NgInvite
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs tracking-wide text-[#746B83]">
              <span>✓ Desain Elegan</span>
              <span>✓ Praktis & Modern</span>
              <span>✓ Mudah Dibagikan</span>
            </div>
          </div>

          {/* Invitation Preview */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-5 top-16 h-28 w-28 rounded-full bg-[#FE0072]/15 blur-2xl" />
            <div className="absolute -right-5 bottom-12 h-36 w-36 rounded-full bg-[#6601FF]/20 blur-2xl" />

            <div className="relative rounded-t-[48%] rounded-b-3xl border border-[#eee7f7] bg-gradient-to-br from-[#F8F5FF] via-white to-[#FFF4F9] p-5 shadow-xl shadow-[#211735]/5 sm:p-8">
              <div className="rounded-t-[48%] rounded-b-2xl border border-white bg-white/80 px-5 py-14 text-center shadow-sm sm:px-10 sm:py-16">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#6601FF]">
                  The Wedding Of
                </p>

                <h2 className="mt-8 font-serif text-5xl italic text-[#211735] sm:text-6xl">
                  Amanda
                </h2>

                <p className="my-3 bg-gradient-to-r from-[#6601FF] to-[#FE0072] bg-clip-text font-serif text-3xl text-transparent">
                  &
                </p>

                <h2 className="font-serif text-5xl italic text-[#211735] sm:text-6xl">
                  Nathan
                </h2>

                <div className="mx-auto my-8 h-px w-16 bg-gradient-to-r from-[#6601FF] to-[#FE0072]" />

                <p className="text-xs tracking-[0.25em] text-[#746B83]">
                  SAVE THE DATE
                </p>

                <p className="mt-3 font-serif text-xl text-[#211735]">
                  20 · 12 · 2026
                </p>

                <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#6601FF]">
                  A beautiful beginning
                </p>
              </div>

              <div className="absolute -bottom-4 right-5 rounded-2xl border border-[#eee7f7] bg-white px-4 py-3 shadow-lg sm:right-0">
                <p className="text-xs text-[#746B83]">Made with love</p>
                <p className="mt-1 text-sm font-semibold text-[#6601FF]">
                  NgInvite Signature
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section
        id="koleksi"
        className="scroll-mt-24 border-t border-[#eee7f7] bg-[#FCFAFF] px-6 py-20 md:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6601FF]">
                Curated for your special day
              </p>

              <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
                Discover Our Collections
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#746B83]">
                Temukan desain yang paling mewakili cerita dan momen spesial
                Anda.
              </p>
            </div>

            <a
              href="/undangan"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#6601FF] transition hover:text-[#FE0072]"
            >
              Lihat Semua Koleksi <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {collections.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-[#eee7f7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#6601FF]/30 hover:shadow-xl hover:shadow-[#6601FF]/5"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-semibold ${
                      item.accent === "pink"
                        ? "text-[#FE0072]"
                        : "text-[#6601FF]"
                    }`}
                  >
                    {item.number}
                  </span>

                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      item.accent === "pink"
                        ? "bg-[#FFF4F9] text-[#FE0072]"
                        : "bg-[#F8F5FF] text-[#6601FF]"
                    }`}
                  >
                    <span aria-hidden="true">✳</span>
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-2xl">{item.name}</h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-[#746B83]">
                  {item.description}
                </p>

                <a
                  href="/undangan"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6601FF] transition group-hover:gap-3 group-hover:text-[#FE0072]"
                >
                  Explore Collection <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="tentang"
        className="scroll-mt-24 relative overflow-hidden px-6 py-20 md:py-28"
      >
        <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#FE0072]/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FE0072]">
            A little more meaningful
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Bukan sekadar undangan, melainkan{" "}
            <span className="bg-gradient-to-r from-[#6601FF] to-[#FE0072] bg-clip-text text-transparent">
              awal dari sebuah cerita.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#746B83] sm:text-base">
            Kami percaya setiap momen istimewa layak dirayakan dengan cara yang
            personal, indah, dan berkesan. NgInvite hadir untuk membantu Anda
            membagikan kebahagiaan dengan cara yang lebih praktis.
          </p>
        </div>
      </section>

      {/* How to order */}
      <section
        id="cara-pesan"
        className="scroll-mt-24 bg-[#F8F5FF] px-6 py-20 md:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6601FF]">
              Simple & effortless
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Momen indah, cara mudah.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#746B83]">
              Tiga langkah sederhana untuk menemukan undangan yang tepat bagi
              hari istimewa Anda.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Pilih Desain",
                description:
                  "Jelajahi koleksi dan pilih desain yang sesuai dengan gaya Anda.",
              },
              {
                number: "02",
                title: "Hubungi Kami",
                description:
                  "Kirim pilihan desain kepada admin untuk mendapatkan informasi pemesanan.",
              },
              {
                number: "03",
                title: "Siap Dibagikan",
                description:
                  "Ikuti proses personalisasi hingga undangan siap dibagikan.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#eee7f7] bg-white p-7"
              >
                <p className="font-serif text-4xl text-[#6601FF]/30">
                  {step.number}
                </p>

                <h3 className="mt-5 font-serif text-2xl">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-[#746B83]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/undangan"
              className="inline-flex items-center gap-2 rounded-full bg-[#6601FF] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#6601FF]/20 transition hover:-translate-y-0.5 hover:bg-[#5200D6]"
            >
              Mulai Jelajahi <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#eee7f7] bg-white px-6 py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="text-center sm:text-left">
            <a href="/" className="text-2xl font-bold tracking-tight">
              nginvite<span className="text-[#FE0072]">.</span>
            </a>

            <p className="mt-2 text-xs text-[#746B83]">
              Made with love for your special moments.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-xs text-[#746B83]">
            <a href="/undangan" className="hover:text-[#6601FF]">
              Koleksi
            </a>
            <a href="#tentang" className="hover:text-[#6601FF]">
              Tentang Kami
            </a>
            <a href="#cara-pesan" className="hover:text-[#6601FF]">
              Cara Pemesanan
            </a>
          </div>

          {/* <p className="text-xs text-[#746B83]">
            © {new Date().getFullYear()} NgInvite.
          </p> */}

          <p className="text-xs text-[#746B83]">
            © <CurrentYear /> NgInvite. All rights reserved.
          </p>
          
        </div>
      </footer>
    </main>
  );
}
