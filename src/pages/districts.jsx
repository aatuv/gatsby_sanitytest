import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const DistrictsPage = ({ data }) => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="ffc">
            {data.districtSlugs.nodes.map((node, index) => (
              <Link to={`/${node.slug.current}`} key={index}>
                {node.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DistrictsPage

export const query = graphql`
  {
    districtSlugs: allSanityDistrict {
      nodes {
        name
        slug {
          current
        }
      }
    }
  }
`
