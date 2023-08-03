type H2Props = { children: React.ReactNode };

const H2 = ({ children }: H2Props) => (
  <h2 className="font-extrabold font-inter text-2xl leading-9 mt-8 mb-6">
    {children}
  </h2>
);

export default H2;
