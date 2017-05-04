import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

import styles from "./index.css"

const Project = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null;
  return (
    <Page
      { ...props }
    >
      <div className={ styles.body }>
        <BodyContainer>
          { props.body }
        </BodyContainer>
      </div>
      <hr />
      <LatestPosts postType={'Project'}/>
    </Page>
  )
}

Project.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string
}

export default Project
