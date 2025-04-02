export default function BulletedListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-base leading-relaxed pl-2">
      {children}
    </li>
  );
}
