"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Category = "Wedding" | "Floral" | "Minimal";

type Template = {
  id: number;
  slug: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  label: string;
  initials: string;
  theme: "purple" | "pink" | "cream" | "green" | "blue" | "rose";
};

const templates: Template[] = [
  {
    id: 1,
    slug: "eternal-love",
    name: "Eternal Love",
    category: "Wedding",
    description: "Desain klasik dan elegan untuk kisah cinta yang abadi.",
    price: 149000,
    label: "Bestseller",
    initials: "A & N",
    theme: "purple",
  },
  {
    id: 2,
    slug: "blooming-romance",
    name: "Blooming Romance",
    category: "Floral",
    description: "Sentuhan bunga lembut dengan nuansa romantis.",
    price: 169000,
    label: "Popular",
    initials: "S & R",
    theme: "pink",
  },
  {
    id: 3,
    slug: "pure-elegance",
    name: "Pure Elegance",
    category: "Minimal",
    description: "Sederhana, bersih, dan tetap berkelas.",
    price: 129000,
    label: "Minimalist",
    initials: "D & K",
    theme: "cream",
  },
  {
    id: 4,
    slug: "garden-of-love",
    name: "Garden of Love",
    category: "Floral",
    description: "Inspirasi taman bunga untuk hari penuh kebahagiaan.",
    price: 179000,
    label: "Editor's Pick",
    initials: "M & A",
    theme: "green",
  },
  {
    id: 5,
    slug: "lavender-dream",
    name: "Lavender Dream",
    category: "Wedding",
    description: "Perpaduan lavender dan detail modern yang menawan.",
    price: 159000,
    label: "New",
    initials: "F & N",
    theme: "blue",
  },
  {
    id: 6,
    slug: "soft-petals",
    name: "Soft Petals",
    category: "Floral",
    description: "Nuansa pastel lembut untuk perayaan penuh kehangatan.",
    price: 159000,
    label: "Romantic",
    initials: "L & B",
    theme: "rose",
  },
];

const categories = ["Semua", "Wedding", "Floral", "Minimal"] as const;

const themeStyles: Record<
  Template["theme"],
  { background: string; accent: string; text: string; ornament: string }
> = {
  purple: {
    background: "from-[#F0E7FF] via-white to-[#F9EEFF]",
    accent: "#7546B8",
    text: "#37264E",
    ornament: "#D8C3F5",
  },
  pink: {
    background: "from-[#FCE8EF] via-white to-[#FFF2F5]",
    accent: "#C05D83",
    text: "#63384A",
    ornament: "#F2C5D5",
  },
  cream: {
    background: "from-[#F5F0E6] via-white to-[#F9F5EC]",
    accent: "#9A8060",
    text: "#4D4337",
    ornament: "#E8DCC7",
  },
  green: {
    background: "from-[#E8F0E6] via-white to-[#F5F7EE]",
    accent: "#658365",
    text: "#334D37",
    ornament: "#C8DDC2",
  },
  blue: {
    background: "from-[#E9ECFA] via-white to-[#F4F0FF]",
    accent: "#7379B4",
    text: "#34375D",
    ornament: "#CDD0F1",
  },
  rose: {
    background: "from-[#F8E9E4] via-white to-[#FFF5EF]",
    accent: "#B87871",
    text: "#68413D",
    ornament: "#EFD0C7",
  },
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

function InvitationArtwork({
  template,
  compact = false,
}: {
  template: Template;
  compact?: boolean;
}) {
  const style = themeStyles[template.theme];

  return (
    <div
      className={`relative isolate flex items-center justify-center overflow-hidden bg-gradient-to-br ${style.background} ${
        compact ? "min-h-[330px]" : "min-h-[390px]"
      }`}
    >
      <div
        className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full blur-2xl"
        style={{ backgroundColor: style.ornament, opacity: 0.55 }}
      />
      <div
        className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full blur-2xl"
        style={{ backgroundColor: style.ornament, opacity: 0.65 }}
      />

      <div
        className={`relative flex w-[76%] flex-col items-center justify-center border text-center shadow-sm ${
          compact ? "min-h-[285px] px-5 py-9" : "min-h-[335px] px-6 py-12"
        }`}
        style={{
          borderColor: `${style.accent}35`,
          backgroundColor: "rgba(255,255,255,0.78)",
        }}
      >
        <div
          className="absolute left-3 top-3 h-5 w-5 rounded-tl-xl border-l border-t"
          style={{ borderColor: style.accent }}
        />
        <div
          className="absolute bottom-3 right-3 h-5 w-5 rounded-br-xl border-b border-r"
          style={{ borderColor: style.accent }}
        />

        <p
          className="text-[9px] font-medium uppercase tracking-[0.3em]"
          style={{ color: style.accent }}
        >
          The Wedding Of
        </p>

        <div
          className="my-5 flex h-14 w-14 items-center justify-center rounded-full border font-serif text-xl italic"
          style={{
            borderColor: `${style.accent}65`,
            color: style.accent,
          }}
        >
          {template.initials}
        </div>

        <h3
          className="font-serif text-3xl italic sm:text-4xl"
          style={{ color: style.text }}
        >
          {template.name}
        </h3>

        <div
          className="my-5 h-px w-12"
          style={{ backgroundColor: style.accent }}
        />

        <p
          className="text-[9px] uppercase tracking-[0.25em]"
          style={{ color: style.accent }}
        >
          Together with their families
        </p>

        <p className="mt-4 font-serif text-lg" style={{ color: style.text }}>
          Save the Date
        </p>

        <p
          className="mt-2 text-[10px] tracking-[0.2em]"
          style={{ color: style.accent }}
        >
          YOUR SPECIAL DAY
        </p>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-[9px] font-medium tracking-[0.3em] text-[#746B83]">
          N G I N V I T E
        </span>
      </div>
    </div>
  );
}

export default function UndanganPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Semua");
  const [search, setSearch] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [chosenTemplate, setChosenTemplate] = useState<Template | null>(null);

  const filteredTemplates = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return templates.filter((template) => {
      const matchesCategory =
        activeCategory === "Semua" || template.category === activeCategory;

      const matchesSearch =
        template.name.toLowerCase().includes(keyword) ||
        template.description.toLowerCase().includes(keyword) ||
        template.category.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-white text-[#211735]">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-[#eee7f7] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight"
            aria-label="NgInvite Home"
          >
            nginvite<span className="text-[#FE0072]">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <Link href="/" className="transition hover:text-[#6601FF]">
              Beranda
            </Link>
            <a href="#katalog" className="font-semibold text-[#6601FF]">
              Koleksi
            </a>
            <Link href="/#tentang" className="transition hover:text-[#6601FF]">
              Tentang Kami
            </Link>
          </nav>

          <Link
            href="/#cara-pesan"
            className="rounded-full bg-[#6601FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#5200D6]"
          >
            Cara Pemesanan
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#FCFAFF] px-6 py-16 sm:py-20 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-[#6601FF]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 -z-10 h-64 w-64 rounded-full bg-[#FE0072]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6601FF]/15 bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FE0072]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#6601FF]">
                The NgInvite Collection
              </span>
            </div>

            <h1 className="mt-7 font-serif text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Find the design for{" "}
              <span className="bg-gradient-to-r from-[#6601FF] to-[#FE0072] bg-clip-text text-transparent">
                your story.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#746B83] sm:text-base">
              Dari sentuhan floral yang romantis hingga desain minimalis yang
              modern, temukan undangan yang terasa begitu personal.
            </p>

            <a
              href="#katalog"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6601FF] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#6601FF]/20 transition hover:-translate-y-0.5 hover:bg-[#5200D6]"
            >
              Jelajahi Semua Desain <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6">
            {[
              { number: "06", label: "Contoh Desain" },
              { number: "03", label: "Kategori Gaya" },
              { number: "100%", label: "Digital & Praktis" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#eee7f7] bg-white/80 px-3 py-5 text-center sm:px-6 sm:py-6"
              >
                <p className="font-serif text-2xl text-[#6601FF] sm:text-3xl">
                  {item.number}
                </p>
                <p className="mt-2 text-[10px] text-[#746B83] sm:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section
        id="katalog"
        className="scroll-mt-24 px-6 py-16 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FE0072]">
                Made for your moments
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Explore the collection
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#746B83]">
                Setiap desain punya karakter tersendiri. Temukan yang paling
                menggambarkan hari istimewa Anda.
              </p>
            </div>

            <p className="text-sm text-[#746B83]">
              Menampilkan{" "}
              <span className="font-semibold text-[#211735]">
                {filteredTemplates.length} desain
              </span>
            </p>
          </div>

          {/* Search and filters */}
          <div className="mt-9 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#746B83]"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Cari nama atau gaya undangan..."
                aria-label="Cari template undangan"
                className="w-full rounded-full border border-[#eee7f7] bg-white py-3.5 pl-12 pr-5 text-sm outline-none transition placeholder:text-[#A49AAC] focus:border-[#6601FF] focus:ring-4 focus:ring-[#6601FF]/5"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={active}
                    className={`rounded-full border px-5 py-2.5 text-sm transition ${
                      active
                        ? "border-[#6601FF] bg-[#6601FF] text-white"
                        : "border-[#eee7f7] bg-white text-[#746B83] hover:border-[#6601FF]/40 hover:text-[#6601FF]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Template cards */}
          {filteredTemplates.length > 0 ? (
            <div className="mt-8 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTemplates.map((template) => (
                <article key={template.id} className="group min-w-0">
                  <div className="relative overflow-hidden rounded-2xl border border-[#eee7f7] bg-[#FCFAFF]">
                    <div className="absolute left-4 top-4 z-10 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#6601FF] shadow-sm">
                      {template.label}
                    </div>

                    <InvitationArtwork template={template} />

                    <button
                      type="button"
                      onClick={() => setSelectedTemplate(template)}
                      className="absolute inset-x-4 bottom-4 rounded-full bg-white/95 px-5 py-3 text-sm font-semibold text-[#6601FF] opacity-100 shadow-md transition hover:bg-[#6601FF] hover:text-white sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                    >
                      Lihat Preview <span aria-hidden="true">↗</span>
                    </button>
                  </div>

                  <div className="flex items-start justify-between gap-3 pt-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FE0072]">
                        {template.category}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl">
                        {template.name}
                      </h3>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-[#746B83]">
                        {template.description}
                      </p>
                    </div>

                    <p className="shrink-0 pt-5 text-sm font-semibold text-[#6601FF]">
                      {formatPrice(template.price)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setChosenTemplate(template);
                      setSelectedTemplate(null);
                    }}
                    className="mt-4 w-full rounded-full border border-[#6601FF]/25 px-5 py-3 text-sm font-semibold text-[#6601FF] transition hover:border-[#6601FF] hover:bg-[#6601FF] hover:text-white"
                  >
                    Pilih Desain
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-[#ddd0f0] px-6 py-16 text-center">
              <p className="font-serif text-2xl">Desain belum ditemukan</p>
              <p className="mt-3 text-sm text-[#746B83]">
                Coba kata kunci lain atau pilih kategori yang berbeda.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Semua");
                }}
                className="mt-6 rounded-full bg-[#6601FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5200D6]"
              >
                Reset Pencarian
              </button>
            </div>
          )}

          {/* Selection notice */}
          {chosenTemplate && (
            <div
              className="mt-10 rounded-2xl border border-[#DCCBFF] bg-[#F8F5FF] p-6 sm:p-8"
              aria-live="polite"
            >
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6601FF]">
                    Pilihan Anda
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">
                    {chosenTemplate.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#746B83]">
                    Harga contoh: {formatPrice(chosenTemplate.price)}. Pilihan
                    ini tersimpan sementara selama halaman masih terbuka. Form
                    pemesanan akan kita buat pada tahap berikutnya.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setChosenTemplate(null)}
                  className="w-fit rounded-full border border-[#6601FF]/25 px-5 py-3 text-sm font-semibold text-[#6601FF] transition hover:bg-white"
                >
                  Batalkan Pilihan
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#6601FF] to-[#9B28E8] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
            Your story, beautifully told
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-5xl">
            Setiap momen istimewa dimulai dari sebuah undangan.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/80">
            Temukan desain yang tepat dan siapkan langkah pertama menuju
            perayaan Anda.
          </p>
          <Link
            href="/#cara-pesan"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#6601FF] transition hover:bg-[#FFF4F9]"
          >
            Pelajari Cara Pemesanan
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#eee7f7] px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            nginvite<span className="text-[#FE0072]">.</span>
          </Link>

          <p className="text-center text-xs text-[#746B83]">
            Made with love for your special moments.
          </p>

          <Link
            href="/"
            className="text-xs text-[#746B83] transition hover:text-[#6601FF]"
          >
            Kembali ke Beranda ↑
          </Link>
        </div>
      </footer>

      {/* Preview modal */}
      {selectedTemplate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#211735]/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedTemplate(null);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelectedTemplate(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-title"
            className="my-auto grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2"
          >
            <div className="relative">
              <InvitationArtwork template={selectedTemplate} compact />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-9">
              <button
                type="button"
                onClick={() => setSelectedTemplate(null)}
                aria-label="Tutup preview"
                className="mb-8 self-end rounded-full border border-[#eee7f7] px-3 py-1.5 text-sm text-[#746B83] transition hover:bg-[#F8F5FF]"
              >
                Tutup ✕
              </button>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FE0072]">
                {selectedTemplate.category} Collection
              </p>

              <h2
                id="preview-title"
                className="mt-3 font-serif text-3xl sm:text-4xl"
              >
                {selectedTemplate.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#746B83]">
                {selectedTemplate.description}
              </p>

              <p className="mt-6 text-xs uppercase tracking-wider text-[#746B83]">
                Harga contoh mulai dari
              </p>
              <p className="mt-1 text-2xl font-semibold text-[#6601FF]">
                {formatPrice(selectedTemplate.price)}
              </p>

              <p className="mt-4 text-xs leading-5 text-[#746B83]">
                Ini adalah mockup desain untuk katalog. Harga dan detail paket
                masih berupa contoh dan dapat disesuaikan.
              </p>

              <button
                type="button"
                onClick={() => {
                  setChosenTemplate(selectedTemplate);
                  setSelectedTemplate(null);
                  window.setTimeout(() => {
                    document
                      .getElementById("katalog")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 0);
                }}
                className="mt-7 rounded-full bg-[#6601FF] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5200D6]"
              >
                Pilih Desain Ini
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
