type SectionLgProps = { children: React.ReactNode; className?: string };

const SectionLg = ({ children, className }: SectionLgProps) => (
  <div className={`max-w-screen-2xl mx-auto ${className ?? ""}`}>
    {children}
  </div>
);

export default SectionLg;
