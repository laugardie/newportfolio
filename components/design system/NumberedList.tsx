type NumberedListProps = { children: React.ReactNode };

const NumberedList = ({ children }: NumberedListProps) => (
  <ol className="list-decimal list-outside font-regular font-source text-2xl mb-6 marker marker:flex pl-6 flex flex-col gap-4 leading-9">
    {children}
  </ol>
);

export default NumberedList;
