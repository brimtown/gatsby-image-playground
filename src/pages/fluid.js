import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FluidSameAspectImage from "../components/fluidSameAspect"
import FluidDiffAspectImage from "../components/fluidDiffAspect"
import FluidNoArtDirectionImage from "../components/fluidNoArtDirection"
import SEO from "../components/seo"

const MARGIN_BOTTOM = '3rem';

const Fluid = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Fluid Images</h2>
    <h3>Same Aspect Ratio</h3>
    <div style={{ width: `100%`, marginBottom: MARGIN_BOTTOM }}>
      <FluidSameAspectImage />
    </div>
    <h3>Different Aspect Ratios</h3>
    <div style={{ width: `100%`, marginBottom: MARGIN_BOTTOM }}>
      <FluidDiffAspectImage />
    </div>
    <h3>No Art Direction</h3>
    <div style={{ width: `100%`, marginBottom: MARGIN_BOTTOM }}>
      <FluidNoArtDirectionImage />
    </div>
    <h3>No Art Direction (Critical)</h3>
    <div style={{ width: `100%`, marginBottom: MARGIN_BOTTOM }}>
      <FluidNoArtDirectionImage critical />
    </div>
  </Layout>
)

export default Fluid
