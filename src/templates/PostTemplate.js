import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "../css/postTemplate.module.css"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PostTemplate = ({ pageContext }) => {
  const { slug } = pageContext
  console.log("pageContext", pageContext)
  return (
    <Layout>
      <h2>this is the post template</h2>
      <p>slug is {slug}</p>
    </Layout>
  )
}

export default PostTemplate
