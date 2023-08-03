type SectionXlProps = { children: React.ReactNode; className?: string };

const SectionXl = ({ children, className }: SectionXlProps) => (
  <div className={`full-width mx-auto ${className ?? ""}`}>{children}</div>
);

export default SectionXl;
