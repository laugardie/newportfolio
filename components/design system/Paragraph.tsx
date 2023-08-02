type ParagraphProps = { children: React.ReactNode; className?: string };

const Paragraph = ({ children, className }: ParagraphProps) => (
  <p className={`font-regular font-source text-2xl mb-12 ${className ?? ""}`}>
    {children}
  </p>
);

export default Paragraph;
