import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import firebaseLogo from './assets/firebase.svg'
import nextjsLogo from './assets/nextjs.svg'
import tailwindLogo from './assets/tailwind.svg'
import typescriptLogo from './assets/typescript.svg'
import homeAssistantLogo from './assets/homeassistant.svg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const AWS_LOGO_URL = '/logos/aws.svg'
const BIMB_LOGO_URL = '/logos/bimb-app-icon.png'
const PAYNET_LOGO_URL = '/logos/paynet.png'
const BEU_LOGO_URL = '/logos/beu.svg'
const ELASTIC_LOGO_URL = '/logos/elastic.svg'
const ELASTIC_TRIAGE_LOGO_URL = '/logos/elastic-ticketing.png'
const PYTHON_LOGO_URL = '/logos/python.svg'
const WINAPP_LOGO_URL = '/logos/winapp.jpg'
const PORTFOLIO_LOGO_URL = '/favicon.svg'
const AY_SMART_HOME_LOGO_URL = '/logos/ay-smart-home.png'
const MCCO_LOGO_URL = '/logos/mcco-logo.png'
const POSTGRESQL_LOGO_URL = '/logos/postgresql.svg'
const EKS_LOGO_URL = '/logos/eks.svg'
const ARGOCD_LOGO_URL = '/logos/argocd.svg'
const CLOUDFORMATION_LOGO_URL = '/logos/cloudformation.svg'
const JAVA_LOGO_URL = '/logos/java.svg'
const SPRINGBOOT_LOGO_URL = '/logos/springboot.svg'
const DOCKER_LOGO_URL = '/logos/docker.svg'
const TELEGRAM_LOGO_URL = '/logos/telegram.svg'
const ADMIN_LOGO_URL = '/logos/admin.svg'

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

type ProjectLogo = { src: string; alt: string; href?: string; backgroundColor?: string }
type ProjectLink = { label: string; href: string }
type ProjectStackItem = { name: string; icon: string }

type Project = {
  title: string
  organization: string
  orgLabel?: string
  bullets: string[]
  logo?: ProjectLogo
  links?: ProjectLink[]
  stack?: ProjectStackItem[]
}

const PROJECTS: Project[] = [
  {
    title: 'This Website – Personal Portfolio',
    organization: 'Personal',
    orgLabel: 'Type',
    logo: { src: PORTFOLIO_LOGO_URL, alt: 'Portfolio favicon' },
    bullets: [
      'Built with Vite, React, and TypeScript for a performant, type-safe single-page portfolio.',
      'Features accessible navigation, animated project carousel, and badge showcase integrations.',
      'Deployed on Firebase Hosting with CLI-driven builds and lightweight deployment automation.',
    ],
    links: [
      { label: 'amnydn.dev', href: 'https://amnydn.dev' },
      { label: 'GitHub', href: 'https://github.com/aminyuddin/amnydn.dev' },
    ],
    stack: [
      { name: 'React', icon: reactLogo },
      { name: 'Vite', icon: viteLogo },
      { name: 'TypeScript', icon: typescriptLogo },
      { name: 'Firebase', icon: firebaseLogo },
    ],
  },
  {
    title: 'Elastic Incident Triage Agent',
    organization: 'Personal / Hackathon Project',
    orgLabel: 'Type',
    logo: {
      src: ELASTIC_TRIAGE_LOGO_URL,
      alt: 'Elastic Incident Triage Agent logo',
      href: 'https://hackathon-ticketing.amnydn.dev/',
      backgroundColor: '#000000',
    },
    bullets: [
      'Built an AI-powered incident triage agent on top of the Elastic Stack for log-driven analysis.',
      'Leveraged MCP tools to create, list, close, and reopen incidents with structured, explainable outputs.',
      'Combined ES|QL searches, workflows, and evidence gathering for operations and compliance reporting.',
      'Shipped a production-ready incident portal, MCP server, and Elastic Agent Builder assets.',
    ],
    links: [
      { label: 'Hackathon', href: 'https://elasticsearch.devpost.com/' },
      { label: 'Devpost project', href: 'https://devpost.com/software/ay-elastic-incident-triage-agent' },
      { label: 'GitHub', href: 'https://github.com/aminyuddin/ay-elastic-incident-triage-agent' },
      { label: 'Demo', href: 'https://hackathon-ticketing.amnydn.dev/' },
    ],
    stack: [
      { name: 'Elasticsearch', icon: ELASTIC_LOGO_URL },
      { name: 'TypeScript', icon: typescriptLogo },
      { name: 'Firebase', icon: firebaseLogo },
      { name: 'Python', icon: PYTHON_LOGO_URL },
    ],
  },
  {
    title: 'AY Smart Home Dashboard',
    organization: 'Personal',
    orgLabel: 'Type',
    logo: { src: AY_SMART_HOME_LOGO_URL, alt: 'AY Smart Home Dashboard logo' },
    bullets: [
      'Home Assistant–compatible smart home dashboard built with entity-first modeling.',
      'Implements real-time room views, device cards, and automation surfaces for Zigbee, Wi‑Fi, and virtual devices.',
      'Designed with Next.js App Router, TypeScript, and Tailwind CSS; future live domain will be home.amnydn.dev.',
    ],
    links: [
      { label: 'Live preview', href: 'https://home.amnydn.dev/' },
      { label: 'GitHub', href: 'https://github.com/aminyuddin/ay-smarthome' },
    ],
    stack: [
      { name: 'Next.js', icon: nextjsLogo },
      { name: 'TypeScript', icon: typescriptLogo },
      { name: 'Tailwind CSS', icon: tailwindLogo },
      { name: 'Home Assistant', icon: homeAssistantLogo },
    ],
  },
  {
    title: 'MCCO – Malaysian Cyber Security Community',
    organization: 'Community-driven',
    orgLabel: 'Type',
    logo: { src: MCCO_LOGO_URL, alt: 'MCCO logo', href: 'https://mcco.org.my/' },
    bullets: [
      'Community-driven cybersecurity portal for Malaysia, fostering knowledge sharing and collaboration.',
      'Platform for workshops, seminars, and networking opportunities for cybersecurity professionals.',
      'Partners with industry events such as CYDES (Cyber Defence & Security Exhibition).',
    ],
    links: [{ label: 'mcco.org.my', href: 'https://mcco.org.my/' }],
    stack: [
      { name: 'TypeScript', icon: typescriptLogo },
      { name: 'Next.js', icon: nextjsLogo },
      { name: 'PostgreSQL', icon: POSTGRESQL_LOGO_URL },
      { name: 'Tailwind CSS', icon: tailwindLogo },
    ],
  },
  {
    title: 'Security Awareness Challenge',
    organization: 'Community-driven',
    orgLabel: 'Type',
    logo: { src: MCCO_LOGO_URL, alt: 'MCCO logo', href: 'https://quiz.mcco.org.my/' },
    bullets: [
      'Next.js quiz portal for the Security Awareness Challenge: test cybersecurity knowledge across Guardian, Specialist, Expert, and Ultimate levels.',
      'Admin panel for content and challenge management',
      'Integrated Telegram bot for notifications and engagement.',
      'Powered by MCCO Security Awareness Program',
      'Questions drawn from a large security-awareness database.',
    ],
    links: [{ label: 'quiz.mcco.org.my', href: 'https://quiz.mcco.org.my/' }],
    stack: [
      { name: 'TypeScript', icon: typescriptLogo },
      { name: 'Next.js', icon: nextjsLogo },
      { name: 'Tailwind CSS', icon: tailwindLogo },
      { name: 'PostgreSQL', icon: POSTGRESQL_LOGO_URL },
      { name: 'Telegram Bot', icon: TELEGRAM_LOGO_URL },
    ],
  },
  {
    title: 'Cloud Adoption & Cloud Migration',
    organization: 'Bank Islam Malaysia Berhad',
    logo: { src: BIMB_LOGO_URL, alt: 'Bank Islam logo' },
    bullets: [
      'Led enterprise migrations to AWS, aligning regulated workloads with the AWS Well-Architected Framework and financial services guardrails.',
      'Defined multi-account landing zones, Control Tower guardrails, and hybrid connectivity between on-premises platforms and AWS.',
      'Oversaw migration waves, cost governance, and performance optimization for mission-critical banking systems.',
      'Enabled modernization while maintaining resiliency, security, and compliance obligations.',
    ],
    stack: [
      { name: 'AWS', icon: AWS_LOGO_URL },
      { name: 'Kubernetes', icon: EKS_LOGO_URL },
      { name: 'ArgoCD', icon: ARGOCD_LOGO_URL },
      { name: 'CloudFormation', icon: CLOUDFORMATION_LOGO_URL },
    ],
  },
  {
    title: 'Be U by Bank Islam – Digital Banking',
    organization: 'Bank Islam Malaysia Berhad',
    logo: { src: BEU_LOGO_URL, alt: 'Be U by Bank Islam logo', href: 'https://getbeu.com/' },
    bullets: [
      'Architected a fully digital banking experience covering onboarding, lifecycle management, and transactions.',
      'Designed integrations with Core Banking, Credit Decision Engine, Card Management, and external services.',
      'Implemented AML/CFT monitoring, observability, and secure system integrations for always-on operations.',
      'Led remediation and performance optimization initiatives to meet stringent regulatory requirements.',
    ],
    links: [{ label: 'getbeu.com', href: 'https://getbeu.com/' }],
    stack: [
      { name: 'Java', icon: JAVA_LOGO_URL },
      { name: 'Spring Boot', icon: SPRINGBOOT_LOGO_URL },
      { name: 'Kubernetes', icon: EKS_LOGO_URL },
      { name: 'PostgreSQL', icon: POSTGRESQL_LOGO_URL },
      { name: 'Microservices', icon: DOCKER_LOGO_URL },
    ],
  },
  {
    title: 'DuitNow & DuitNow QR',
    organization: 'Payments Network Malaysia (PayNet)',
    logo: { src: PAYNET_LOGO_URL, alt: 'PayNet logo', href: 'https://www.paynet.my/' },
    bullets: [
      "Delivered and operated Malaysia's national real-time payments infrastructure enabling instant interbank transfers.",
      'Supported DuitNow and DuitNow QR for high-volume, low-latency payments across banks and e-wallets.',
      'Implemented DevOps and SRE practices including CI/CD, Infrastructure as Code, monitoring, and automation.',
      'Ensured high availability, resiliency, and regulatory compliance for mission-critical payment rails.',
    ],
    links: [{ label: 'paynet.my', href: 'https://www.paynet.my/' }],
  },
  {
    title: 'IIP - Infrastructure Improvement Plan',
    organization: 'Payments Network Malaysia (PayNet)',
    logo: { src: PAYNET_LOGO_URL, alt: 'PayNet logo', href: 'https://www.paynet.my/' },
    bullets: [
      'Led infrastructure modernization initiatives under PayNet’s Infrastructure Improvement Plan (IIP).',
      'Implemented Git-based workflows to improve collaboration, governance, and change control.',
      'Built simulation tooling, observability pipelines, and automation jobs to support production readiness.',
      'Upskilled engineering teams through DevOps enablement workshops and Infrastructure as Code patterns.',
    ],
    links: [{ label: 'paynet.my', href: 'https://www.paynet.my/' }],
  },
  {
    title: 'JomPAY - National Bill Payment System',
    organization: 'Malaysian Electronic Clearing Corporation (MyClear)',
    logo: { src: PAYNET_LOGO_URL, alt: 'PayNet logo', href: 'https://www.paynet.my/' },
    bullets: [
      "Delivered and enhanced JomPAY, Malaysia's nationwide bill payment platform under PayNet.",
      'Designed secure bank-to-biller connectivity with stringent regulatory requirements.',
      'Supported production readiness, transaction reliability, and post-implementation stability at national scale.',
    ],
    links: [{ label: 'paynet.my', href: 'https://www.paynet.my/' }],
  },
  {
    title: 'WinApp - Digital Wallet',
    organization: 'WinApp Messenger Sdn. Bhd.',
    logo: { src: WINAPP_LOGO_URL, alt: 'WinApp Inc.' },
    bullets: [
      'Founded and led development of a blockchain-based wallet platform and API services.',
      'Designed secure, scalable cloud infrastructure with strong focus on performance and security.',
      'Drove product vision, architecture, and hands-on engineering execution across stack layers.',
      'Worked across blockchain integrations, backend services, and cloud-native platforms.',
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
                    <div className="project-card-heading">
                      {project.logo ? (
                        <div className="project-logo">
                          {project.logo.href ? (
                            <a
                              href={project.logo.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-logo-link"
                            >
                              <img
                                src={project.logo.src}
                                alt={project.logo.alt}
                                className="project-logo-img"
                                style={
                                  project.logo.backgroundColor
                                    ? { backgroundColor: project.logo.backgroundColor }
                                    : undefined
                                }
                              />
                            </a>
                          ) : (
                            <img
                              src={project.logo.src}
                              alt={project.logo.alt}
                              className="project-logo-img"
                              style={
                                project.logo.backgroundColor
                                  ? { backgroundColor: project.logo.backgroundColor }
                                  : undefined
                              }
                            />
                          )}
                        </div>
                      ) : null}
                      <div className="project-card-heading-text">
                        <h3 className="project-card-title">{project.title}</h3>
                        <p className="project-card-org project-card-org-desktop">
                          <strong>{project.orgLabel ?? 'Organization'}:</strong> {project.organization}
                        </p>
                      </div>
                    </div>
                    <div className="project-card-org project-card-org-mobile">
                      <strong>{project.orgLabel ?? 'Organization'}:</strong> {project.organization}
                    </div>
                    {project.stack ? (
                      <ul className="project-stack" aria-label={`${project.title} technology stack`}>
                        {[...project.stack]
                          .sort((a, b) => b.name.length - a.name.length)
                          .map((item) => (
                          <li
                            key={item.name}
                            className={`project-stack-item${item.name.length > 10 ? ' project-stack-item--long' : ''}`}
                          >
                            <img src={item.icon} alt="" className="project-stack-icon" aria-hidden="true" />
                            <span className="project-stack-name">{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <ul className="project-card-bullets">
                      {project.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                    {project.links ? (
                      <div className="project-card-links">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            {link.label}
                            <span className="project-link-arrow" aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
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
