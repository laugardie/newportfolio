type SectionSmProps = { children: React.ReactNode; className?: string };

const SectionSm = ({ children, className }: SectionSmProps) => (
  <div
    className={`max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl 2xl:max-w-3xl mx-auto ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

export default SectionSm;
