import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

import styles from "./index.css"

const Project = (props) => {
  return (
    <Page
      { ...props }>
      {
        props.body &&
        <BodyContainer>
          { props.body }
        </BodyContainer>
      }
      <hr />
      <LatestPosts postType={'Project'} title={ 'Other projects'} exclude={ props.head.title }/>
    </Page>
  );
}

Project.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string
}

export default Project
