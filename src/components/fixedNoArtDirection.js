import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "./gatsby-image"
import transformImageData from "../transformImageData"

const fixedNoArtDirectionQuery = graphql`
  query {
    image: file(relativePath: { eq: "500x500.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const FixedNoArtDirectionImage = (critical = false) => (
  <StaticQuery
    query={fixedNoArtDirectionQuery}
    render={data => {
      return <Img {...critical} fixed={data.image.childImageSharp.fixed} />
    }}
  />
)

export default FixedNoArtDirectionImage;
