export interface NavItem {
  label: string
  href: string
  icon?: string
}

export interface StudioNavbarProps {
  /**
   * Optional custom navigation items
   */
  navItems?: NavItem[]
  
  /**
   * Optional custom logo
   */
  logo?: React.ReactNode
  
  /**
   * Optional custom CTA button text
   */
  ctaText?: string
  
  /**
   * Optional custom CTA button link
   */
  ctaHref?: string
  
  /**
   * Whether to show mobile menu by default
   */
  showMobileMenu?: boolean
  
  /**
   * Optional className for custom styling
   */
  className?: string
  
  /**
   * Optional background blur intensity
   */
  blurIntensity?: 'sm' | 'md' | 'lg'
}