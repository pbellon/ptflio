import React from "react"

import Bio from "../../components/Bio"
import LatestProjects from "../../components/LatestProjects"
import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"
import styles from "./index.css"
const Homepage = (props) => {
  return (
    <Page  { ...props }>
      <div className={styles.cols}>
        <LatestProjects />
        <LatestPosts />
      </div>
    </Page>
  )
}

export default Homepage
