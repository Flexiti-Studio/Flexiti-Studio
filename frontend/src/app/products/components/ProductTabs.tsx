'use client'

import React from 'react'
import { ProductCategory } from './types'


interface ProductTabsProps {
  activeTab: ProductCategory
  onTabChange: (tab: ProductCategory) => void
}

const ProductTabs: React.FC<ProductTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'all' as ProductCategory, label: 'All Products' },
    { id: 'business' as ProductCategory, label: 'For Business' },
    { id: 'education' as ProductCategory, label: 'For Education' },
    { id: 'developer-tools' as ProductCategory, label: 'Developer Tools' },
  ]

  return (
    <div className="pb-3">
      <div className="flex border-b border-[#314368] px-4 gap-8 justify-center">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-colors"
              style={{
                borderBottomColor: isActive ? '#0d59f2' : 'transparent'
              }}
            >
              <p className={`
                text-sm font-bold leading-normal tracking-[0.015em] cursor-pointer
                ${isActive ? '' : 'text-[#90a4cb] hover:text-[#90a4cb]'}
              `}>
                {tab.label}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ProductTabs