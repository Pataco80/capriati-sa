import React from 'react'
//import { Tab, WorksList, WorksGallery } from '@components'

import Tab from './Tab'
//import WorksList from '../WorksList/WorksList'
//import WorksGallery from '../WorksGallery/WorksGallery'

const tabContent = [
  {
    title: 'Nos Travaux',
    content: <WorksList />,
  },
  {
    title: 'Notre gallerie',
    content: <WorksGallery />,
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
