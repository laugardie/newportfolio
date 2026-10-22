import type { Metadata } from 'next'
import GummyLoader from './GummyLoader'

export const metadata: Metadata = {
  title: 'Fredrin',
}

export default function FredrinPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#F2F2ED]">
      <GummyLoader />
    </main>
  )
}
