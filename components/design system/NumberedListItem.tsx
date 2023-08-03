type NumberedListItemProps = { children: React.ReactNode };

const NumberedListItem = ({ children }: NumberedListItemProps) => (
  <li>
    <span className="relative left-4">{children}</span>
  </li>
);

export default NumberedListItem;
