type CaptionProps = { children: React.ReactNode; className?: string };

const Caption = ({ children, className }: CaptionProps) => (
  <figcaption
    className={`font-regular text-sm font-source text-center mx-auto pt-6 text-lightGray ${
      className ?? ""
    }`}
  >
    {children}
  </figcaption>
);

export default Caption;
