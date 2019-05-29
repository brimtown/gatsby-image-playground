import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "./gatsby-image"
import transformImageData from "../transformImageData"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const fluidSameAspectQuery = graphql`
  query {
    desktopImage: file(relativePath: { eq: "2000x1000.jpg" }) {
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

const FluidSameAspectImage = () => (
  <StaticQuery
    query={fluidSameAspectQuery}
    render={data => {
      const images = transformImageData(data)
      return <Img fluidImages={images} />
    }}
  />
)

export default FluidSameAspectImage
