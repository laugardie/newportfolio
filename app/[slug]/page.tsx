import { redirect } from 'next/navigation'
import { projects } from '@/content/projects'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function LegacySlugPage({ params }: { params: { slug: string } }) {
  redirect(`/work/${params.slug}`)
}
