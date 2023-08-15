type IconPlusProps = { className?: string };

const IconPlus = ({ className }: IconPlusProps) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={` ${className ?? ""}`}
  >
    <path
      d="M16 6.6665V25.3332"
      stroke="#101010"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.6665 16H25.3332"
      stroke="#101010"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default IconPlus;
