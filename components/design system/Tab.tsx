type TabProps = {
  children: React.ReactNode;
  className?: string;
  isSelected?: boolean;
  filterByTab: () => void;
};

const Tab = ({ children, className, isSelected, filterByTab }: TabProps) => (
  <button
    className={`
      font-source text-xl font-normal hover:text-accent
      ${className ?? ""}
      ${isSelected ? "text-accent" : ""}
    `}
    onClick={filterByTab}
  >
    {children}
  </button>
);

export default Tab;
