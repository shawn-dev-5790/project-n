import '@/assets/styles/__normalize.css'
import '@/assets/styles/__global.css'
import type { Metadata } from 'next'
// ====================================================
// Route Segment Config
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
// ====================================================
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5
// ====================================================
// Metadata Files
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata
// ====================================================
export const metadata: Metadata = {
  title: 'APP',
  description: 'APP index.page',
}
// ====================================================
// Root Layout
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata
// ====================================================
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
