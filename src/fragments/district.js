import { graphql } from "gatsby"
export const districtFragment = graphql`
  fragment district_fragment on SanityDistrict {
    name
    _rawBio(resolveReferences: {maxDepth: 10})
    _rawImage(resolveReferences: {maxDepth: 10})
  }
`
