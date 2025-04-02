export default function BulletedList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-8 space-y-4 font-figtree">
      {children}
    </ul>
  );
}
