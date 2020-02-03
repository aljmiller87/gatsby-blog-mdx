import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    Hello world!
    <div>
      <Link to="/post/">Link to Post</Link>
    </div>
  </Layout>
)
