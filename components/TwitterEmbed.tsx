'use client'

import { useEffect, useRef } from 'react'

export default function TwitterEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.innerHTML = ''

    const blockquote = document.createElement('blockquote')
    blockquote.className = 'twitter-tweet'
    const a = document.createElement('a')
    a.href = url
    blockquote.appendChild(a)
    ref.current.appendChild(blockquote)

    if ((window as any).twttr?.widgets) {
      ;(window as any).twttr.widgets.load(ref.current)
    } else {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      document.body.appendChild(script)
    }
  }, [url])

  return <div ref={ref} />
}
