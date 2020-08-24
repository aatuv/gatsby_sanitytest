import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PortableText from "../components/general/portableContent"
import { imageUrlFor } from "../lib/imageUrlFor"
import { buildImageObj } from "../lib/helpers"

export default ({ data: { place } }) => {
  return (
    <Layout>
      <section className="section is-relative is-paddingless">
        <div className="page-cover">
          <img
            src={imageUrlFor(buildImageObj(place._rawImage.image))
              .width(1980)
              .height(Math.floor((9 / 16) * 1600))
              .fit("crop")
              .auto("format")
              .url()}
            alt={place._rawImage.alt}
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
            }}
          >
            <h1>{place.name}</h1>
            {place._rawBody && <PortableText blocks={place._rawBody} />}
          </div>
          <Link to={"/" + place.district.slug.current}>
            <div
              className="location-link content has-background-white"
              style={{
                padding: "1rem",
                borderRadius: "20px",
              }}
            >
              <h3>{`Location: ${place.district.name}`}</h3>
              <img
                src={imageUrlFor(buildImageObj(place.district._rawImage.image))
                  .width(400)
                  .height(Math.floor((9 / 16) * 400))
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={place.district._rawImage.alt}
              />
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query placeBySlug($slug: String!) {
    place: sanityPlace(slug: { current: { eq: $slug } }) {
      ...place_fragment
    }
  }
`
