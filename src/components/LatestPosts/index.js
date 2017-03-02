/*eslint no-console: "off"*/
import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

import styles from "./index.css"

const defaultNumberOfPosts = 6

const LatestPosts = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: props.postType },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)
  // console.log('latestPosts:', latestPosts, props.numberOfPosts, defaultNumberOfPosts);

  return (
    <div>
      <h2 className={ styles.title }>
        { props.title }
      </h2>
      <PagesList pages={ latestPosts } />
    </div>
  )
}

LatestPosts.propTypes = {
  postType: PropTypes.string,
  title: PropTypes.string,
  numberOfPosts: PropTypes.number,
}

LatestPosts.defaultProps = {
  postType: "Post",
  title: "Latest Posts"
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPosts
