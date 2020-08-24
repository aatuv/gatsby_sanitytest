import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import clientConfig from "../../../client-config"
export default ({ blocks }) => {
  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  }

  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      {...clientConfig.sanity}
    />
  )
}
