type NumberedListItemProps = { children: React.ReactNode };

export default function NumberedListItem({
  children,
}: {
  children: React.ReactNode
}) {
  return <li className="text-gray-700 leading-relaxed">{children}</li>
}
