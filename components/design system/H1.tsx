type H1Props = { children: React.ReactNode };

const H1 = ({ children }: H1Props) => (
  <h1 className="font-extrabold font-inter text-4xl leading-10 mt-24 mb-5">
    {children}
  </h1>
);

export default H1;
