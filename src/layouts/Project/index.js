import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import LatestProjects from "../../components/LatestProjects"
import Page from "../Page"

import styles from "./index.css"

const Project = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  return (
    <Page
      { ...props }
      header={
        <div>
          <header className={ styles.header }>
            {
              pageDate &&
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
            }
          </header>
        </div>
      }
    >
      <div className={ styles.body }>
        <BodyContainer>
          { props.body }
        </BodyContainer>
      </div>
      <hr />
      <LatestProjects />
    </Page>
  )
}

Project.propTypes = {
  head: PropTypes.object.isRequired,
  body: PropTypes.string
}

export default Project
