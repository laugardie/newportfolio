const LINE = "I love designing and building things.";

export default function FredrinPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#111111] px-6 py-24 text-center text-[#ededed] [color-scheme:dark]">
      {/* Black and white until hovered, then colour. */}
      <div className="group h-[min(26rem,48vh)] w-[min(26rem,48vh)] overflow-hidden rounded-[22%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/laura-square.jpg"
          alt="Laura"
          className="h-full w-full object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
        />
      </div>

      <h1 className="mt-14 text-2xl font-normal tracking-tight">Hello, I&apos;m Laura.</h1>
      <p className="mt-3 text-base text-[#8b8b8b]">{LINE}</p>
    </main>
  );
}
