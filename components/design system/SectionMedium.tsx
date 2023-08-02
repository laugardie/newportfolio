type SectionMediumProps = { children: React.ReactNode; className?: string };

const SectionMedium = ({ children, className }: SectionMediumProps) => (
  <div className={`max-w-6xl mx-auto ${className ?? ""}`}>{children}</div>
);

export default SectionMedium;
