import { graphql } from "gatsby"
export const placeFragment = graphql`
  fragment place_fragment on SanityPlace {
    name
    slug {
      current
    }
    _rawBody(resolveReferences: { maxDepth: 10 })
    _rawImage(resolveReferences: { maxDepth: 10 })
    district {
      name
      slug {
        current
      }
      _rawImage(resolveReferences: { maxDepth: 10 })
    }
  }
`
