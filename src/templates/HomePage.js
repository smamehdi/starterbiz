import React from 'react'
import { graphql } from 'gatsby'

// import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body, videoPoster, videoTitle, video, gallery }) => (
  <main className="Home">
     <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle} >
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>
    {/* <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    /> */}
    <section className="section fade-in-section">
      <div className="container" >
        <h2 className="secondary" style={{fontSize:"4rem", textAlign:"center"}}>Our Company</h2>
        <Content source={body} />
      </div>
    </section>
    <section className="section inverse fade-in-section">
      <div className="container skinny inside " style={{textAlign:"center"}}>
        <h2 className={"bright"} style={{fontSize:"4rem", color:"#ffffff"}}>Our Services</h2>
        <Gallery images={gallery} />
      </div>
    </section>

  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        subtitle
        featuredImage
        video
        videoPoster
        videoTitle
        accordion {
          title
          description
        }
      }
    }
  }
`
