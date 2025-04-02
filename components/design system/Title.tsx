export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-medium mt-12 font-figtree">
      {children}
    </h2>
  );
}
