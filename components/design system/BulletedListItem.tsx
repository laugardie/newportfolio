type BulletedListItemProps = { children: React.ReactNode };

const BulletedListItem = ({ children }: BulletedListItemProps) => (
  <li>
    <span className="relative left-4">{children}</span>
  </li>
);

export default BulletedListItem;
