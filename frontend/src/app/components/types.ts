export interface Service {
  id: number
  title: string
  description: string
  icon: string
}

export interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  alt: string
}

export interface FooterLink {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}