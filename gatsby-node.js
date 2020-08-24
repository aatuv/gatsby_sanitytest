exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const placeResult = await graphql(`
    {
      allSanityPlace {
        nodes {
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
      allSanityDistrict {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  if (placeResult.errors) {
    throw placeResult.errors
  }

  const places = placeResult.data.allSanityPlace.nodes || []

  places.map((node, index) => {
    const path = `/${node.district.slug.current}/${node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/place-template.jsx"),
      context: { slug: node.slug.current },
    })
  })

  const districtResult = await graphql(`
    {
      allSanityPlace {
        nodes {
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
      allSanityDistrict {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  if (districtResult.errors) {
    throw districtResult.errors
  }

  const districts = districtResult.data.allSanityDistrict.nodes || []

  districts.map((node, index) => {
    const path = `/${node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/district-template.jsx"),
      context: { slug: node.slug.current },
    })
  })
}
