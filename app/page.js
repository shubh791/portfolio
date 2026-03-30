import dynamic from 'next/dynamic'
import Header from '@/components/portfolio/Header'
import Hero from '@/components/portfolio/Hero'

const About = dynamic(() => import('@/components/portfolio/About'), { ssr: false })
const SkillsSection = dynamic(() => import('@/components/portfolio/SkillsSection'), { ssr: false })
const Services = dynamic(() => import('@/components/portfolio/Services'), { ssr: false })
const ProjectsSection = dynamic(() => import('@/components/portfolio/ProjectsSection'), { ssr: false })
const ContactCTA = dynamic(() => import('@/components/portfolio/ContactCTA'), { ssr: false })
const Footer = dynamic(() => import('@/components/portfolio/Footer'), { ssr: false })

function SectionFallback() {
  return (
    <div className="flex justify-center items-center py-32">
      <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: 'var(--accent)', borderTopColor: 'transparent' }} />
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
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
