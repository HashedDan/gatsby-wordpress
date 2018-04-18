import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PostListing from '../components/Posts/PostListing/PostListing'
import SEO from '../components/Accessories/SEO/SEO'
import config from '../../data/SiteConfig'
import TopNavigation from '../components/Layout/Navigation/Navigation'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allWordpressPost.edges
    console.log(postEdges);
    return (
      <HomeContainer>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        {/* <TopNavigation pages={this.props.data.allWordpressPage} /> */}
        <MainContentContainer>
          <h1>Gatsby + Wordpress Blog</h1>
          <p style={{ textAlign: 'center' }}>
            Welcome to New in Nashville.
          </p>
          <Divider />
          {postEdges.map(post =>
            <div key={post.node.id}>
              <h1>{post.node.title}</h1>
            </div>
          )}
          {/* <PostListing postEdges={postEdges} /> */}
        </MainContentContainer>
      </HomeContainer>
    )
  }
}

export default Index

const HomeContainer = styled.div``

const Divider = styled.div`
  margin: 50px 0;
  border-bottom: 1px solid darkgray;
`

const MainContentContainer = styled.main`
  width: 600px;
  margin: 50px auto;

  h1 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    font-size: 16px;
    margin-bottom: 25px;
  }

  pre {
    background-color: grey;
  }
`

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost {
      edges {
        node {
          author {
            name
          }
          date
          slug
          title
          modified
          excerpt
          id
          categories {
            name
          }
          content
        }
      }
    }
  }
`
