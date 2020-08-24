import React from "react"
import Figure from "./figure"

const serializers = {
  types: {
    districtReference: ({ node }) => <span>{node.district.name}</span>,
    mainImage: Figure,
  },
}

export default serializers
