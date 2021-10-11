import * as React from 'react'
import { Layout, Seo, Hero } from '@components'

// Import styled-components, styledElements and helpers
import { setColor } from '@helpers'

const IndexPage = () => {
  return (
    <Layout home background={`${setColor.mainGreyL3}`}>
      <Seo
        title='Accueil'
        keywords="Page d'Accueil, A propos de nous, Nos Services"
        shareTitle='Bienvenue chez nous.'
      />
      <Hero home title='Home Page' />
    </Layout>
  )
}

export default IndexPage
