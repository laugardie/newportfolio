import QuoteIcon from "../QuoteIcon";

type QuoteProps = { children: React.ReactNode };

const Quote = ({ children }: QuoteProps) => (
  <div className="relative mb-12">
    <QuoteIcon className="absolute right-full mr-8" />
    <p className="font-bold italic font-source text-3xl leading-10">
      {children}
    </p>
  </div>
);

export default Quote;
