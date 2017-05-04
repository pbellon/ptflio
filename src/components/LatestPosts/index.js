/*eslint no-console: "off"*/
import React, { PropTypes } from "react"
import enhanceCollection, { filter } from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

import styles from "./index.css"

const defaultNumberOfPosts = 6

const LatestPosts = (props, { collection }) => {
  const latestPosts = filter(enhanceCollection(collection, {
    filter: { layout: props.postType },
    sort: "date",
    reverse: true
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts),[
    (p)=>p.title != props.exclude
  ]);

  return (
    <div className={ props.className }>
      <h2 className={ styles.title }>
        { props.title }
      </h2>
      <PagesList pages={ latestPosts } showLinkDomain={ props.showLinkDomain } />
    </div>
  )
}

LatestPosts.propTypes = {
  postType: PropTypes.string,
  title: PropTypes.string,
  exclude: PropTypes.string,
  showLinkDomain: PropTypes.bool,
  numberOfPosts: PropTypes.number,
}

LatestPosts.defaultProps = {
  postType: "Post",
  title: "Latest Posts",
  showLinkDomain: false,
  exclude: ""
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPosts
