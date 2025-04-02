import QuoteIcon from "../QuoteIcon";

export default function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="relative pl-12 pt-3 pb-6">
      <QuoteIcon className="absolute left-4 top-3 w-6 h-6" />
      <p className="text-xl ml-2 font-figtree italic">
        {children}
      </p>
    </blockquote>
  );
}
