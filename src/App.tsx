import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

const TECHNOLOGIES = [
  'Agentic AI',
  'MCP',
  'LLMs',
  'Cloud',
  'Platform Engineering',
  'DevOps',
  'Banking',
  'Linux',
  'Architecture',
  'Programming',
  'Container',
  'IoT',
  'Infrastructure',
  'Kubernetes',
  'Serverless',
  'DevSecOps',
  'Automation',
]

const CREDLY_PROFILE_URL = 'https://www.credly.com/users/amnydn/badges'

const sectionIconProps = {
  viewBox: '0 0 24 24' as const,
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

function IconAbout({ className }: { className?: string }) {
  return (
    <svg className={className} {...sectionIconProps}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  )
}

function IconTech({ className }: { className?: string }) {
  return (
    <svg className={className} {...sectionIconProps}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function IconProjects({ className }: { className?: string }) {
  return (
    <svg className={className} {...sectionIconProps}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function IconBadges({ className }: { className?: string }) {
  return (
    <svg className={className} {...sectionIconProps}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

function IconContact({ className }: { className?: string }) {
  return (
    <svg className={className} {...sectionIconProps}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconGithub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function IconMedium({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  )
}

function IconDevpost({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aminyuddin', Icon: IconLinkedIn },
  { name: 'GitHub', url: 'https://github.com/aminyuddin', Icon: IconGithub },
  { name: 'Medium', url: 'https://medium.com/@amnydn', Icon: IconMedium },
  { name: 'Devpost', url: 'https://devpost.com/amnydn', Icon: IconDevpost },
] as const

const CREDLY_LOGO_URL = 'https://cdn.credly.com/assets/structure/logo-c48f2e5e3a483bb2b97d000b9ac94ffc8e194377f104c6a80aaf60c18c8a9d13.svg'

const BADGES: { name: string; url: string; imageUrl: string }[] = [
  { name: 'AWS Certified Cloud Practitioner', url: 'https://www.credly.com/badges/6b6f72bd-6186-46de-819d-7ef4e42a0629', imageUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png' },
  { name: 'AWS Certified Solutions Architect – Associate', url: 'https://www.credly.com/badges/88c4df84-e2a5-47a0-976d-660ed6d98d63', imageUrl: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png' },
  { name: 'AWS Certified Solutions Architect – Professional', url: 'https://www.credly.com/badges/97cac5c7-227e-4d2e-8680-8d50410207e1', imageUrl: 'https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png' },
  { name: 'AWS Certified Advanced Networking – Specialty', url: 'https://www.credly.com/badges/0493a6f6-a064-4554-8325-4bdff10f4d91', imageUrl: 'https://images.credly.com/size/340x340/images/4d08274f-64c1-495e-986b-3143f51b1371/image.png' },
]

type Project = { title: string; organization: string; orgLabel?: string; bullets: string[] }

const PROJECTS: Project[] = [
  {
    title: 'Cloud Adoption & Cloud Migration',
    organization: 'Bank Islam Malaysia Berhad',
    bullets: [
      'Led enterprise cloud adoption and migration initiatives across on-premises and AWS environments.',
      'Defined cloud target architectures, landing zones, and migration strategies aligned with regulatory and security requirements.',
      'Oversaw application migrations, hybrid integrations, performance optimization, and cloud cost management.',
      'Enabled modernization while maintaining resiliency, security, and compliance in regulated banking environments.',
    ],
  },
  {
    title: 'Be U by Bank Islam – Digital Banking Platform',
    organization: 'Bank Islam Malaysia Berhad',
    bullets: [
      'Architected a cloud-native digital banking platform supporting onboarding, customer lifecycle management, and transactions.',
      'Designed integrations with Core Banking, Credit Decision Engine, Card Management, and external services.',
      'Implemented AML/CFT transaction monitoring, observability, and secure system integrations.',
      'Led architecture decisions on security remediation, performance optimization, and regulatory compliance.',
    ],
  },
  {
    title: 'DuitNow & DuitNow QR – Real-Time Payments Platform (RPP)',
    organization: 'Payments Network Malaysia (PayNet)',
    bullets: [
      "Delivered and operated Malaysia's national real-time payments infrastructure, enabling instant interbank fund transfers.",
      'Supported DuitNow and DuitNow QR for high-volume, low-latency payment transactions.',
      'Implemented DevOps and SRE practices, including CI/CD, Infrastructure as Code, monitoring, and automation.',
      'Ensured high availability, resiliency, and operational readiness for mission-critical payment systems.',
    ],
  },
  {
    title: 'IIP – Infrastructure Improvement Plan',
    organization: 'Payments Network Malaysia (PayNet)',
    bullets: [
      'Led infrastructure modernization and migration initiatives under the Infrastructure Improvement Plan (IIP).',
      'Implemented Git-based source code repositories, improving version control, collaboration, and code merge efficiency.',
      'Built simulation and testing tools, server monitoring scripts, and automation jobs to support production readiness.',
      'Introduced Splunk for centralized logging, monitoring, and alerting.',
      'Drove DevOps and automation initiatives, implementing CI/CD, Infrastructure as Code (IaC), and DevOps enablement workshops to upskill engineering teams.',
    ],
  },
  {
    title: 'JomPAY – National Bill Payment System (NBPS)',
    organization: 'Malaysian Electronic Clearing Corporation (MyClear)',
    bullets: [
      "Delivered and enhanced JomPAY, Malaysia's nationwide bill payment platform.",
      'Designed and integrated secure bank–biller connectivity under strict regulatory requirements.',
      'Supported production readiness, transaction reliability, and post-implementation stability at national scale.',
    ],
  },
  {
    title: 'WinApp – Blockchain Wallet & API Platform',
    organization: 'WinApp Engineer Sdn. Bhd.',
    bullets: [
      'Founded and led the development of a blockchain-based wallet platform and API services.',
      'Designed secure, scalable cloud infrastructure with strong focus on performance and security.',
      'Led product vision, architecture, and hands-on engineering execution.',
      'Worked across blockchain, backend services, and cloud platforms.',
    ],
  },
  {
    title: 'Elastic Incident Triage Agent',
    organization: 'Personal / Hackathon Project',
    orgLabel: 'Type',
    bullets: [
      'Built an AI-powered incident triage agent on top of the Elastic Stack to analyze production incidents.',
      'Leveraged LLMs and agentic workflows to summarize logs, correlate signals, and generate structured incident insights.',
      'Designed for evidence-based triage, compliance awareness, and improved operational decision-making.',
      'Deployed as a cloud-native service, integrating observability data with intelligent automation.',
    ],
  },
  {
    title: 'This Website – Personal Portfolio',
    organization: 'Personal',
    orgLabel: 'Type',
    bullets: [
      'Built with Vite, React, and TypeScript for a fast, type-safe single-page portfolio.',
      'Responsive layout with project carousel, scroll-in sections, and accessible navigation.',
      'Deployed on Firebase Hosting with CI-friendly build and deploy workflows.',
    ],
  },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function App() {
  const aboutRef = useInView(0.05)
  const techRef = useInView(0.05)
  const projectsRef = useInView(0.05)
  const badgesRef = useInView(0.1)
  const contactRef = useInView(0.1)
  const projectListRef = useRef<HTMLUListElement>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateProjectScrollState = useCallback(() => {
    const list = projectListRef.current
    if (!list) return
    const { scrollLeft, scrollWidth, clientWidth } = list
    setCanScrollPrev(scrollLeft > 2)
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 2)
  }, [])

  useEffect(() => {
    const list = projectListRef.current
    if (!list) return
    updateProjectScrollState()
    list.addEventListener('scroll', updateProjectScrollState)
    const ro = new ResizeObserver(updateProjectScrollState)
    ro.observe(list)
    return () => {
      list.removeEventListener('scroll', updateProjectScrollState)
      ro.disconnect()
    }
  }, [updateProjectScrollState])

  const scrollProject = (direction: 'prev' | 'next') => {
    const list = projectListRef.current
    if (!list) return
    const step = list.clientWidth + 20
    list.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' })
  }

  return (
    <div className="site">
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-photo-wrap">
            <img
              src="/profile-512.png"
              alt="Ts. Amin Yuddin"
              className="hero-photo"
              width={160}
              height={160}
            />
          </div>
          <div className="hero-text">
            <p className="hero-role">Platform Engineering & Technology Architect</p>
            <h1 className="hero-name">Ts. Amin Yuddin</h1>
            <p className="hero-meta">
              <span className="hero-stat">16 years</span> herding servers · DevOps, Agentic AI, MCP & Cloud
            </p>
            <nav className="hero-social" aria-label="Social links">
              {SOCIAL_LINKS.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-link"
                  aria-label={name}
                >
                  <Icon className="hero-social-icon" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <section
          ref={aboutRef.ref}
          className={`section section-about ${aboutRef.inView ? 'in-view' : ''}`}
          aria-labelledby="about-heading"
        >
          <h2 id="about-heading" className="section-title section-title-with-icon">
            <IconAbout className="section-title-icon" />
            About
          </h2>
          <div className="section-body">
            <p>
              I&apos;m a software developer at my core, with 16 years of experience building
              enterprise systems using Java and the Spring Framework. Over the years, this
              foundation expanded into deep, hands-on work with blockchain platforms including
              Hyperledger Fabric, Ethereum, and Multichain.
            </p>
            <p>
              I work across DevOps, Platform Engineering, and Site Reliability Engineering (SRE),
              designing reliable, observable, and highly automated cloud-native systems at scale.
              My experience spans infrastructure, CI/CD, resiliency, performance engineering, and
              production operations.
            </p>
            <p>
              Today, my focus is on agentic AI, LLMs, Model Context Protocol (MCP), and AI tooling
              that improves developer productivity and enables intelligent systems.
            </p>
            <p>
              I&apos;m passionate about serverless architectures, cloud-native design, and
              AI-augmented workflows, and I enjoy helping the community adopt agentic AI while
              enabling teams to ship secure, reliable, real-world impact.
            </p>
          </div>
        </section>

        <section
          ref={techRef.ref}
          className={`section section-tech ${techRef.inView ? 'in-view' : ''}`}
          aria-labelledby="tech-heading"
        >
          <h2 id="tech-heading" className="section-title section-title-with-icon">
            <IconTech className="section-title-icon" />
            Technology
          </h2>
          <ul className="tech-list">
            {TECHNOLOGIES.map((name) => (
              <li key={name} className="tech-item">{name}</li>
            ))}
          </ul>
        </section>

        <section
          ref={projectsRef.ref}
          className={`section section-projects ${projectsRef.inView ? 'in-view' : ''}`}
          aria-labelledby="projects-heading"
        >
          <h2 id="projects-heading" className="section-title section-title-with-icon">
            <IconProjects className="section-title-icon" />
            Featured Projects
          </h2>
          <div className="project-carousel-wrap">
            <button
              type="button"
              className="project-carousel-btn project-carousel-prev"
              aria-label="Previous project"
              disabled={!canScrollPrev}
              onClick={() => scrollProject('prev')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <ul ref={projectListRef} className="project-list">
              {PROJECTS.map((project, index) => (
                <li key={project.title} className="project-card">
                  <div className="project-card-left">
                    <span className="project-card-number" aria-hidden="true">{index + 1}</span>
                  </div>
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-org">
                      <strong>{project.orgLabel ?? 'Organization'}:</strong> {project.organization}
                    </p>
                    <ul className="project-card-bullets">
                      {project.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="project-carousel-btn project-carousel-next"
              aria-label="Next project"
              disabled={!canScrollNext}
              onClick={() => scrollProject('next')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </section>

        <section
          ref={badgesRef.ref}
          className={`section section-badges ${badgesRef.inView ? 'in-view' : ''}`}
          aria-labelledby="badges-heading"
        >
          <h2 id="badges-heading" className="section-title section-title-with-icon">
            <IconBadges className="section-title-icon" />
            Achievement Badges
          </h2>
          <p className="badges-intro">Certifications and credentials.</p>
          <ul className="badges-list">
            {BADGES.map((badge) => (
              <li key={badge.name}>
                <a
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge-link"
                >
                  <img src={badge.imageUrl} alt="" className="badge-img" width={32} height={32} />
                  <span className="badge-name">{badge.name}</span>
                  <span className="badge-arrow" aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CREDLY_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="badges-cta"
          >
            <img src={CREDLY_LOGO_URL} alt="" className="badges-cta-logo" width={72} height={36} />
            <span className="badges-cta-label">View all badges</span>
            <span className="badges-cta-arrow" aria-hidden="true">→</span>
          </a>
        </section>

        <section
          ref={contactRef.ref}
          className={`section section-contact ${contactRef.inView ? 'in-view' : ''}`}
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="section-title section-title-with-icon">
            <IconContact className="section-title-icon" />
            Contact
          </h2>
          <p className="contact-intro">Get in touch — I&apos;d love to hear from you.</p>
          <a href="mailto:me@amnydn.dev" className="contact-cta">
            <IconContact className="contact-cta-icon" aria-hidden />
            <span className="contact-cta-label">Email me</span>
            <span className="contact-cta-address">me@amnydn.dev</span>
            <span className="contact-cta-arrow" aria-hidden="true">→</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-copy">© {new Date().getFullYear()} Ts. Amin Yuddin</p>
      </footer>
    </div>
  )
}

export default App
