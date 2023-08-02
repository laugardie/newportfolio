type SectionNarrowProps = { children: React.ReactNode; className?: string };

const SectionNarrow = ({ children, className }: SectionNarrowProps) => (
  <div className={`max-w-3xl mx-auto ${className ?? ""}`}>{children}</div>
);

export default SectionNarrow;
