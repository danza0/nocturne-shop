export default function Marquee() {
  const phrase = "NØCTURNE — БІЛЬШЕ НІЖ ОДЯГ — ТВІЙ ШЛЯХ — ТВОЯ ГОРДІСТЬ — ";
  const words = phrase.repeat(8);
  return (
    <div className="border-y border-white/10 py-6 md:py-10 overflow-hidden">
      <div className="marquee-track text-[clamp(2rem,7vw,6rem)] font-semibold tracking-[-0.02em]">
        <span className="px-6">{words}</span>
        <span className="px-6">{words}</span>
      </div>
    </div>
  );
}
