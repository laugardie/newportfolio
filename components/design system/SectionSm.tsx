type SectionSmProps = { children: React.ReactNode; className?: string };

const SectionSm = ({ children, className }: SectionSmProps) => (
  <div
    className={`max-w-xs xs:max-w-md md:max-w-xl lg:max-w-3xl mx-auto ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

export default SectionSm;
