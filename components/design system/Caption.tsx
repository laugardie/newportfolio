type CaptionProps = { children: React.ReactNode; className?: string };

const Caption = ({ children, className }: CaptionProps) => (
  <figcaption
    className={`font-regular text-base font-source text-center mx-auto pt-2 md:pt-6 text-lightGray ${
      className ?? ""
    }`}
  >
    {children}
  </figcaption>
);

export default Caption;
