export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-12 md:py-16">
      <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div>
          <div className="text-xl md:text-2xl font-semibold tracking-[0.18em] mb-3">
            NØCTURNE
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 max-w-xs">
            Більше ніж одяг.
          </p>
        </div>

        <nav className="flex flex-col md:items-end gap-3 text-sm tracking-[0.2em] uppercase">
          <a
            href="https://www.instagram.com/nocturne._shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity duration-500"
          >
            Instagram ↗
          </a>
          <a
            href="https://t.me/ncturne_shop_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity duration-500"
          >
            Telegram ↗
          </a>
        </nav>

        <div className="text-xs tracking-[0.2em] uppercase text-white/40">
          © 2026 NØCTURNE
        </div>
      </div>
    </footer>
  );
}
