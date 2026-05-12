import dynamic from 'next/dynamic'
import Header from '@/components/portfolio/Header'
import Hero from '@/components/portfolio/Hero'

// Dynamically import heavy sections with ssr:false to keep initial bundle small
const About = dynamic(() => import('@/components/portfolio/About'), { ssr: false, loading: SectionFallback })
const SkillsSection = dynamic(() => import('@/components/portfolio/SkillsSection'), { ssr: false, loading: SectionFallback })
const Services = dynamic(() => import('@/components/portfolio/Services'), { ssr: false, loading: SectionFallback })
const ProjectsSection = dynamic(() => import('@/components/portfolio/ProjectsSection'), { ssr: false, loading: SectionFallback })
const ContactCTA = dynamic(() => import('@/components/portfolio/ContactCTA'), { ssr: false, loading: SectionFallback })
const Footer = dynamic(() => import('@/components/portfolio/Footer'), { ssr: false })

function SectionFallback() {
  return (
    <div className="flex justify-center items-center py-32" aria-hidden="true">
      <div
        className="w-8 h-8 rounded-full border-2 animate-spin"
        style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }}
      />
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <SkillsSection />
        <Services />
        <ProjectsSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
