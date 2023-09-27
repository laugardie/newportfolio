type BulletedListItemProps = { children: React.ReactNode };

const BulletedListItem = ({ children }: BulletedListItemProps) => (
  <li>
    <span className="relative left-2 lg:left-4 text-xl lg:text-2xl">
      {children}
    </span>
  </li>
);

export default BulletedListItem;
