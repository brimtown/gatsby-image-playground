import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "./gatsby-image"
import transformImageData from "../transformImageData"

const fluidDiffAspectQuery = graphql`
  query {
    desktopImage: file(relativePath: { eq: "1200x800.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileImage: file(relativePath: { eq: "1000x500.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const FluidDiffAspectImage = () => (
  <StaticQuery
    query={fluidDiffAspectQuery}
    render={data => {
      const images = transformImageData(data)
      return <Img fluidImages={images} />
    }}
  />
)

export default FluidDiffAspectImage;
