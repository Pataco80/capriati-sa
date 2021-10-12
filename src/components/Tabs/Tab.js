import React, { useEffect, useState } from 'react'
import * as S from './WorksTabsStyled'
import { SectionContent } from '../StyledElements/SectionStyled'

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active)
  const [tabsData, setTabsData] = useState([])

  useEffect(() => {
    let data = []

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return

      const {
        props: { tab, children },
      } = element
      data.push({ tab, children })
    })

    setTabsData(data)
  }, [children])

  return (
    <>
      <S.ButtonList>
        {tabsData.map(({ tab }, idx) => (
          <S.TabButton
            primary
            className={idx === activeTab ? 'active' : null}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </S.TabButton>
        ))}
      </S.ButtonList>

      <SectionContent>
        {tabsData[activeTab] && tabsData[activeTab].children}
      </SectionContent>
    </>
  )
}

const TabPane = ({ children }) => {
  return { children }
}

Tab.TabPane = TabPane

export default Tab
