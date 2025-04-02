export default function NumberedList({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-decimal list-outside pl-8 flex flex-col gap-2 mb-4">
      {children}
    </ol>
  )
}
