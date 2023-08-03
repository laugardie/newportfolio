type SectionMdProps = { children: React.ReactNode; className?: string };

const SectionMd = ({ children, className }: SectionMdProps) => (
  <div className={`max-w-6xl mx-auto ${className ?? ""}`}>{children}</div>
);

export default SectionMd;
