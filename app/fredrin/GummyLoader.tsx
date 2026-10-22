'use client'

import dynamic from 'next/dynamic'

// three.js touches window/document, so the scene only ever runs in the browser.
const GummyScene = dynamic(() => import('./GummyScene'), {
  ssr: false,
  loading: () => <div className="w-full" style={{ aspectRatio: '7 / 3' }} />,
})

export default GummyLoader

function GummyLoader() {
  return <GummyScene />
}
