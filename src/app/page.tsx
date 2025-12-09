import dynamic from 'next/dynamic'
// Force rebuild
import { Suspense } from 'react'
import { Hero } from "@/components/sections/hero"
import { SectionSkeleton } from "@/components/ui/section-skeleton"

// Lazy load heavy components
const SocialProofNew = dynamic(
  () => import('@/components/sections/social-proof-new').then(mod => ({ default: mod.SocialProofNew })),
  {
    loading: () => <SectionSkeleton height="h-32" />,
    ssr: true
  }
)

const ShowcaseEditorial = dynamic(
  () => import('@/components/sections/showcase-editorial').then(mod => ({ default: mod.ShowcaseEditorial })),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: true
  }
)

const SelectedWork = dynamic(
  () => import('@/components/sections/selected-work').then(mod => ({ default: mod.SelectedWork })),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: true
  }
)

const ValuePropsNew = dynamic(
  () => import('@/components/sections/value-props-new').then(mod => ({ default: mod.ValuePropsNew })),
  {
    loading: () => <SectionSkeleton height="h-64" />,
    ssr: true
  }
)


const AboutSeo = dynamic(
  () => import('@/components/sections/about-seo').then(mod => ({ default: mod.AboutSeo })),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: true
  }
)

const CTANew = dynamic(
  () => import('@/components/sections/cta-new').then(mod => ({ default: mod.CTANew })),
  {
    loading: () => <SectionSkeleton height="h-32" />,
    ssr: true
  }
)


export default function Home() {
  return (
    <div className="relative">

      {/* Hero loads immediately */}
      <Hero />

      {/* Lazy load remaining sections with Suspense */}
      <Suspense fallback={<SectionSkeleton height="h-32" />}>
        <SocialProofNew />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <AboutSeo />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <ShowcaseEditorial />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <SelectedWork />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <ValuePropsNew />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-32" />}>
        <CTANew />
      </Suspense>
    </div>
  )
}
