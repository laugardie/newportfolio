type SectionSmProps = { children: React.ReactNode; className?: string };

const SectionSm = ({ children, className }: SectionSmProps) => (
  <div className={`max-w-3xl mx-auto ${className ?? ""}`}>{children}</div>
);

export default SectionSm;
