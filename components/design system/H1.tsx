type H1Props = { children: React.ReactNode };

const H1 = ({ children }: H1Props) => (
  <h1 className="font-extrabold font-inter text-3xl lg:text-4xl leading-[40px] lg:leading-[54px] mt-24 mb-5">
    {children}
  </h1>
);

export default H1;
