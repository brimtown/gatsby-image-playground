import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FixedSameDimensionImage from "../components/fixedSameDimension"
import FixedDiffDimensionImage from "../components/fixedDiffDimension"
import FixedNoArtDirectionImage from "../components/fixedNoArtDirection"
import SEO from "../components/seo"

const MARGIN_BOTTOM = '3rem';

const Fixed = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Fixed Images</h2>
    <h3>Same Height and Width</h3>
      <FixedSameDimensionImage />
      <div style={{ marginBottom: MARGIN_BOTTOM }} />
    <h3>Different Height and Width</h3>
      <FixedDiffDimensionImage />
      <div style={{ marginBottom: MARGIN_BOTTOM }} />
    <h3>No Art Direction</h3>
      <FixedNoArtDirectionImage />
      <div style={{ marginBottom: MARGIN_BOTTOM }} />
    <h3>No Art Direction (Critical)</h3>
      <FixedNoArtDirectionImage critical />
  </Layout>
)

export default Fixed
