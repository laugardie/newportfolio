export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed font-figtree">
      {children}
    </p>
  );
}
