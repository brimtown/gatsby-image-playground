import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "./gatsby-image"
import transformImageData from "../transformImageData"

const fluidNoArtDirectionQuery = graphql`
  query {
    image: file(relativePath: { eq: "500x500.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const FluidNoArtDirectionImage = (critical = false) => (
  <StaticQuery
    query={fluidNoArtDirectionQuery}
    render={data => {
      return <Img {...critical} fluid={data.image.childImageSharp.fluid} />
    }}
  />
)

export default FluidNoArtDirectionImage;
