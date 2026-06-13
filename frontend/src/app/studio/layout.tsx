import { metadata as studioMetadata, viewport as studioViewport } from 'next-sanity/studio'

export const metadata = {
  ...studioMetadata,
  title: 'Flexiti Studio CMS',
}

export const viewport = studioViewport

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#030014]">
      {children}
    </div>
  )
}
