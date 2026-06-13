'use client';

import React, { useState } from 'react';
import PortfolioHero from './PortfolioHero';
import PortfolioFeatured from './PortfolioFeatured';
import PortfolioGrid from './PortfolioGrid';
import PortfolioPositioning from './PortfolioPositioning';
import PortfolioTechStack from './PortfolioTechStack';
import PortfolioCTA from './PortfolioCTA';
import CaseStudyModal from './CaseStudyModal';
import { PortfolioItem } from './types';

interface PortfolioContentProps {
  items: PortfolioItem[];
}

export default function PortfolioContent({ items }: PortfolioContentProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <>
      <PortfolioHero />
      <PortfolioFeatured items={items} onViewCaseStudy={setSelectedProject} />
      <PortfolioGrid items={items} onViewCaseStudy={setSelectedProject} />
      <PortfolioPositioning />
      <PortfolioTechStack />
      <PortfolioCTA />
      
      {/* Dynamic Case Study Modal */}
      <CaseStudyModal 
        isOpen={!!selectedProject} 
        item={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
