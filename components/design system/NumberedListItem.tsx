type NumberedListItemProps = { children: React.ReactNode };

const NumberedListItem = ({ children }: NumberedListItemProps) => (
  <li>
    <span className="relative left-2 lg:left-4 text-xl lg:text-2xl">
      {children}
    </span>
  </li>
);

export default NumberedListItem;
