import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PortableText from "../components/general/portableContent"
import { imageUrlFor } from "../lib/imageUrlFor"
import { buildImageObj } from "../lib/helpers"

export default ({ data: { district, relatedPlaces } }) => {
  console.log(relatedPlaces)
  return (
    <Layout>
      <section className="section is-relative is-paddingless">
        <div className="page-cover">
          <img
            src={imageUrlFor(buildImageObj(district._rawImage.image))
              .width(1980)
              .height(Math.floor((9 / 16) * 1600))
              .fit("crop")
              .auto("format")
              .url()}
            alt={district._rawImage.alt}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div
            className="content has-background-white"
            style={{
              padding: "2rem",
              borderRadius: "20px",
              position: "sticky",
              top: "0",
            }}
          >
            <h1>{district.name}</h1>
            {district._rawBio && <PortableText blocks={district._rawBio} />}
          </div>
          <div
            className="has-background-white"
            style={{ padding: "2rem", borderRadius: "20px" }}
          >
            <h2 className="title is-4">Places</h2>
            <div className="jsc">
              {relatedPlaces.nodes.map((node, index) => (
                <Link to={node.slug.current}>
                  {console.log(node)}
                  <div
                    className="location-link"
                    style={{
                      padding: "1rem",
                      borderRadius: "20px",
                    }}
                    key={index}
                  >
                    <h3 className="title is-5">{node.name}</h3>
                    <img
                      src={imageUrlFor(buildImageObj(node._rawImage.image))
                        .width(400)
                        .height(Math.floor((9 / 16) * 400))
                        .fit("crop")
                        .auto("format")
                        .url()}
                      alt={node._rawImage.alt}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query districtBySlug($slug: String!) {
    district: sanityDistrict(slug: { current: { eq: $slug } }) {
      ...district_fragment
    }
    relatedPlaces: allSanityPlace(
      filter: { district: { slug: { current: { eq: $slug } } } }
    ) {
      nodes {
        ...place_fragment
      }
    }
  }
`
