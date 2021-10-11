import * as React from 'react'
import { Layout } from '@components'
import { Link } from 'gatsby'

// styles
const pageStyles = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  display: 'block',
  width: '100%',
  padding: '3rem',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div style={pageStyles}>
        <title>Not found</title>
        <h1 style={headingStyles}>Not Found Page</h1>
        <p style={paragraphStyles}>
          Sorry{' '}
          <span role='img' aria-label='Pensive emoji'>
            😔
          </span>{' '}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to='/'>Go home</Link>.
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
