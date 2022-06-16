import React from "react"
import Articles from "../components/articles"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Header
        title={homepage.attributes.header.title}
        subtitle={homepage.attributes.header.subtitle}
        text={homepage.attributes.header.text}
        headerImage={homepage.attributes.header.headerImage}
      />
      <Seo seo={homepage.attributes.seo} />
      <Container>
        <div className="uk-section">
          <div>
            <Articles articles={articles} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        header: { populate: "*" },
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
