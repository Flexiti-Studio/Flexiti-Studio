// app/studio/[[...index]]/page.tsx
'use client'

import dynamic from 'next/dynamic'
import config from '@/sanity/sanity.config'

const NextStudio = dynamic(
    () => import('next-sanity/studio').then((mod) => mod.NextStudio),
    { ssr: false }
)

export default function StudioPage() {
    if (process.env.NODE_ENV !== 'development') {
        return <div>Studio is only available in development.</div>
    }

    return <NextStudio config={config} />
}
