import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const GalleryPageTemplate = ({
    image,
    title,
    heading,
    description,
    main
}) => ( < section className = "section section--gradient" >
    <
    div className = "container" >
    <
    div className = "section" >
    <
    div className = "columns" >
    <
    div className = "column is-10 is-offset-1" >
    <
    div className = "content" >
    <
    div className = "full-width-image-container margin-top-0"
    style = {
        {
            backgroundImage: `url(${
                    !!image.childImageSharp
                      ? image.childImageSharp.fluid.src
                      : image
                  })`,
        }
    } >
    <
    h2 className = "has-text-weight-bold is-size-1"
    style = {
        {
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
        }
    } > { title } < /h2> </div >
    <
    div className = "columns" >
    <
    div className = "column is-7" >

    <
    h3 className = "has-text-weight-semibold is-size-2" > { heading } < /h3>  <
    p > { description } < /p>  <
    /div> <
    /div>  <
    div className = "columns" >
    <
    div className = "column is-7" >
    <
    h3 className = "has-text-weight-semibold is-size-3" > { main.heading } < /h3>  <
    p > { main.description } < /p>  <
    /div>  <
    /div>  <
    div className = "tile is-ancestor" >
    <
    div className = "tile is-vertical" >
    <
    div className = "tile" >
    <
    div className = "tile is-parent is-vertical" >
    <
    article className = "tile is-child" >
    <
    PreviewCompatibleImage imageInfo = { main.image1 }
    />  <
    /article>  <
    /div>   <
    div className = "tile is-parent" >
    <
    article className = "tile is-child" >
    <
    PreviewCompatibleImage imageInfo = { main.image2 }
    />  <
    /article>  <
    /div>  <
    /div>  <
    div className = "tile is-parent" >
    <
    article className = "tile is-child" >
    <
    PreviewCompatibleImage imageInfo = { main.image3 }
    />  <
    /article>  <
    /div>  <
    div className = "tile is-parent" >
    <
    article className = "tile is-child" >
    <
    PreviewCompatibleImage imageInfo = { main.image4 }
    />  <
    /article>  <
    /div>  <
    div className = "tile is-parent" >
    <
    article className = "tile is-child" >
    <
    PreviewCompatibleImage imageInfo = { main.image5 }
    /> </article > < /div> <div className = "tile is-parent" > <
    article className = "tile is-child" >
    <
    PreviewCompatibleImage imageInfo = { main.image6 }
    /> </article > < /div>


    <
    /div>  <
    /div>

    <
    /div>  <
    /div>  <
    /div>  <
    /div>  <
    /div>  <
    /section>
)

GalleryPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image6: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
}

const GalleryPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return ( <
        Layout >
        <
        GalleryPageTemplate image = { frontmatter.image }
        title = { frontmatter.title }
        heading = { frontmatter.heading }
        description = { frontmatter.description }
        main = { frontmatter.main }
        /> < /
        Layout >
    )
}

GalleryPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default GalleryPage

export const galleryPageQuery = graphql `
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        main {
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image4 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image5 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image6 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }

        }
      }
    }
  }
`