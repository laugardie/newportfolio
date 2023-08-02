type TitleProps = { children: React.ReactNode };

const Title = ({ children }: TitleProps) => (
  <h1 className="font-extrabold font-inter text-8xl mb-12">{children}</h1>
);

export default Title;
