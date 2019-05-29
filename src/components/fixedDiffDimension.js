import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "./gatsby-image"
import transformImageData from "../transformImageData"

const fixedDiffDimensionQuery = graphql`
  query {
    desktopImage: file(relativePath: { eq: "1200x800.jpg" }) {
      childImageSharp {
        fixed(width: 600, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mobileImage: file(relativePath: { eq: "1000x500.jpg" }) {
      childImageSharp {
        fixed(width: 750, height: 375) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const FixedDiffDimensionImage = () => (
  <StaticQuery
    query={fixedDiffDimensionQuery}
    render={data => {
      const images = transformImageData(data, true)
      return <Img fixedImages={images} />
    }}
  />
)

export default FixedDiffDimensionImage;
