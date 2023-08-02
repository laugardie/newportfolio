type BulletedListProps = { children: React.ReactNode };

const BulletedList = ({ children }: BulletedListProps) => (
  <ul className="list-disc list-outside font-regular font-source text-2xl mb-2 marker marker:flex pl-4 flex flex-col gap-4 leading-9">
    {children}
  </ul>
);

export default BulletedList;
