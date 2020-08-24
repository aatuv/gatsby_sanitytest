import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const PlacesPage = ({ data }) => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="ffc">
            {data.placeSlugs.nodes.map((node, index) => (
              <Link
                to={`/${node.district.slug.current}/${node.slug.current}`}
                key={index}
              >
                {node.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PlacesPage

export const query = graphql`
  {
    placeSlugs: allSanityPlace {
      nodes {
        name
        slug {
          current
        }
        district {
          slug {
            current
          }
        }
      }
    }
  }
`
