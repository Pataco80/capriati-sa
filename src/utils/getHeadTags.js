export const getMeta = (metaName) => {
  const metas = document.getElementsByTagName('meta')
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('property') === metaName) {
      return metas[i].getAttribute('content')
    }
  }
  return metas
}

export const getLink = (linkName) => {
  const links = document.getElementsByTagName('link')
  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute('rel') === linkName) {
      return links[i].getAttribute('href')
    }
  }
  return links
}
