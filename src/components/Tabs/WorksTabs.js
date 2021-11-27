import React from 'react'

import Tab from './Tab'
import WorksList from '../WorksList/WorksList'
import WorksGallery from '../WorksGallery/WorksGallery'

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

const WorksTabs = () => {
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
