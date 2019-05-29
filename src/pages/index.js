import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Cases to support:
//
// 1) Fluid vs Fixed
// 2) Same aspect ratio/size vs. different
// 3) Critical vs. not
//
// Additional concerns:
// 1) Placeholders
// 2) Div styles
// 3) Number of variants


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2><Link to="/fluid">/fluid</Link></h2>
    <h2><Link to="/fixed">/fixed</Link></h2>
  </Layout>
)

export default IndexPage
