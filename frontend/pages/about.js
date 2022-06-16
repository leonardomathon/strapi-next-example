import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const About = ({ aboutpage }) => {
  console.log(aboutpage)
  return (
    <Layout>
      <Header
        title={aboutpage.attributes.header.title}
        subtitle={aboutpage.attributes.header.subtitle}
        text={aboutpage.attributes.header.text}
        headerImage={aboutpage.attributes.header.headerImage}
      />
      <Seo seo={aboutpage.attributes.seo} />
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [aboutpage] = await Promise.all([
    fetchAPI("/aboutpage", {
      populate: {
        header: { populate: "*" },
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      aboutpage: aboutpage.data,
    },
    revalidate: 1,
  }
}

export default About
