/*eslint no-console: "off"*/
import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import ProjectsList from "../../components/ProjectsList"

import styles from "./index.css"

const defaultNumberOfPosts = 6

const LatestPosts = (props, { collection }) => {
  console.log('collection:', collection);
  const latestProjects = enhanceCollection(collection, {
    filter: { layout: "Project" },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <h2 className={ styles.latestProjects }>
        { "Latest Projects" }
      </h2>
      <ProjectsList pages={ latestProjects } />
    </div>
  )
}

LatestPosts.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPosts
