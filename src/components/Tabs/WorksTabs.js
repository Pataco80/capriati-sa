import React from 'react'

// Import Components for App
import Tab from './Tab'
import WorksList from '../WorksList/WorksList'
import WorksGallery from '../WorksGallery/WorksGallery'

// Create render panne content
const tabContent = [
  {
    title: 'Notre gallerie',
    content: <WorksGallery />,
  },
  {
    title: 'Nos Travaux',
    content: <WorksList />,
  },
]

// Component
const WorksTabs = () => {
  // Render component
  return (
    <Tab>
      {tabContent.map((tab, idx) => (
        <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
          {tab.content}
        </Tab.TabPane>
      ))}
    </Tab>
  )
}

export default WorksTabs
