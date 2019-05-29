import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "./gatsby-image"
import transformImageData from "../transformImageData"

const fixedSameDimensionQuery = graphql`
  query {
    desktopImage: file(relativePath: { eq: "1200x800.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mobileImage: file(relativePath: { eq: "1000x500.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const FixedSameDimensionImage = () => (
  <StaticQuery
    query={fixedSameDimensionQuery}
    render={data => {
      const images = transformImageData(data, true)
      return <Img fixedImages={images} />
    }}
  />
)

export default FixedSameDimensionImage;
