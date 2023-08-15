type BulletedListProps = { children: React.ReactNode };

const BulletedList = ({ children }: BulletedListProps) => (
  <ul className="list-disc list-outside font-regular font-source text-2xl mb-6 marker marker:flex pl-6 flex flex-col gap-4 leading-9">
    {children}
  </ul>
);

export default BulletedList;
