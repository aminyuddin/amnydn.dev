import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import App from './App'

// Mock IntersectionObserver for jsdom
class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock ResizeObserver for jsdom
class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  vi.stubGlobal('ResizeObserver', MockResizeObserver)
})

describe('App', () => {
  describe('renders core sections', () => {
    it('renders the hero section with name and role', () => {
      render(<App />)
      expect(screen.getByText('Ts. Amin Yuddin')).toBeInTheDocument()
      expect(screen.getByText('Platform Engineering & Technology Architect')).toBeInTheDocument()
    })

    it('renders the About section', () => {
      render(<App />)
      expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
    })

    it('renders the Technology section with all tech items', () => {
      render(<App />)
      expect(screen.getByRole('heading', { name: /technology/i })).toBeInTheDocument()
      expect(screen.getByText('Agentic AI')).toBeInTheDocument()
      const techList = screen.getByRole('heading', { name: /technology/i }).closest('section')!
      expect(within(techList).getByText('Kubernetes')).toBeInTheDocument()
      expect(within(techList).getByText('DevSecOps')).toBeInTheDocument()
    })

    it('renders the Featured Projects section', () => {
      render(<App />)
      expect(screen.getByRole('heading', { name: /featured projects/i })).toBeInTheDocument()
    })

    it('renders the Achievement Badges section', () => {
      render(<App />)
      expect(screen.getByRole('heading', { name: /achievement badges/i })).toBeInTheDocument()
    })

    it('renders the Contact section', () => {
      render(<App />)
      expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
      expect(screen.getByText('me@amnydn.dev')).toBeInTheDocument()
    })

    it('renders the footer with copyright', () => {
      render(<App />)
      const year = new Date().getFullYear()
      expect(screen.getByText(`© ${year} Ts. Amin Yuddin`)).toBeInTheDocument()
    })
  })

  describe('social links', () => {
    it('renders all social links', () => {
      render(<App />)
      const socialNav = screen.getByRole('navigation', { name: /social links/i })
      expect(within(socialNav).getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
        'href',
        'https://www.linkedin.com/in/aminyuddin'
      )
      expect(within(socialNav).getByRole('link', { name: 'GitHub' })).toHaveAttribute(
        'href',
        'https://github.com/aminyuddin'
      )
      expect(within(socialNav).getByRole('link', { name: 'Medium' })).toHaveAttribute(
        'href',
        'https://medium.com/@amnydn'
      )
      expect(within(socialNav).getByRole('link', { name: 'Devpost' })).toHaveAttribute(
        'href',
        'https://devpost.com/amnydn'
      )
    })

    it('opens social links in new tabs', () => {
      render(<App />)
      const links = screen.getAllByRole('link', { name: /LinkedIn|GitHub|Medium|Devpost/ })
      for (const link of links) {
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      }
    })
  })

  describe('projects carousel', () => {
    it('renders all project cards', () => {
      render(<App />)
      expect(screen.getByText('YourTurn - Queue Management System')).toBeInTheDocument()
      expect(screen.getByText('Elastic Incident Triage Agent')).toBeInTheDocument()
      expect(screen.getByText('This Website – Personal Portfolio')).toBeInTheDocument()
      expect(screen.getByText('AY Smart Home Dashboard')).toBeInTheDocument()
      expect(screen.getByText('DuitNow & DuitNow QR')).toBeInTheDocument()
    })

    it('renders carousel navigation buttons', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /previous project/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /next project/i })).toBeInTheDocument()
    })

    it('renders project links with correct targets', () => {
      render(<App />)
      const yourturnLink = screen.getByRole('link', { name: /live site/i })
      expect(yourturnLink).toHaveAttribute('href', 'https://yourturn.my')
      expect(yourturnLink).toHaveAttribute('target', '_blank')
    })

    it('renders project card numbers', () => {
      render(<App />)
      // There are 14 projects, so we should see numbers 1 through 14
      expect(screen.getByText('1')).toBeInTheDocument()
      expect(screen.getByText('14')).toBeInTheDocument()
    })
  })

  describe('badges', () => {
    it('renders all AWS certification badges', () => {
      render(<App />)
      expect(screen.getByText('AWS Certified Cloud Practitioner')).toBeInTheDocument()
      expect(screen.getByText('AWS Certified Solutions Architect – Associate')).toBeInTheDocument()
      expect(screen.getByText('AWS Certified Solutions Architect – Professional')).toBeInTheDocument()
      expect(screen.getByText('AWS Certified Advanced Networking – Specialty')).toBeInTheDocument()
    })

    it('renders View all badges link to Credly', () => {
      render(<App />)
      const credlyLink = screen.getByRole('link', { name: /view all badges/i })
      expect(credlyLink).toHaveAttribute('href', 'https://www.credly.com/users/amnydn/badges')
    })
  })

  describe('accessibility', () => {
    it('renders social links nav with aria-label', () => {
      render(<App />)
      expect(screen.getByRole('navigation', { name: /social links/i })).toBeInTheDocument()
    })

    it('renders section headings with correct IDs for aria-labelledby', () => {
      render(<App />)
      expect(document.getElementById('about-heading')).toBeInTheDocument()
      expect(document.getElementById('tech-heading')).toBeInTheDocument()
      expect(document.getElementById('projects-heading')).toBeInTheDocument()
      expect(document.getElementById('badges-heading')).toBeInTheDocument()
      expect(document.getElementById('contact-heading')).toBeInTheDocument()
    })

    it('renders hero photo with alt text', () => {
      render(<App />)
      expect(screen.getByAltText('Ts. Amin Yuddin')).toBeInTheDocument()
    })

    it('sets aria-hidden on decorative icons', () => {
      render(<App />)
      // Carousel nav arrows should be aria-hidden
      const prevBtn = screen.getByRole('button', { name: /previous project/i })
      const svg = prevBtn.querySelector('svg')
      expect(svg).toHaveAttribute('aria-hidden')
    })

    it('renders technology stack lists with aria-label per project', () => {
      render(<App />)
      // Projects with stacks should have labeled lists
      expect(screen.getByRole('list', { name: /yourturn.*technology stack/i })).toBeInTheDocument()
    })
  })

  describe('contact', () => {
    it('renders email link with correct mailto', () => {
      render(<App />)
      const emailLink = screen.getByRole('link', { name: /email me/i })
      expect(emailLink).toHaveAttribute('href', 'mailto:me@amnydn.dev')
    })
  })
})
