import * as React from 'react'
import { Layout, Hero } from '@components'

// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

const IndexPage = () => {
  return (
    <Layout home background={`${setColor.mainGreyL3}`}>
      <Hero home title='Home Page' />
    </Layout>
  )
}

export default IndexPage
