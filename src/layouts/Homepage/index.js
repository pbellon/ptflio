import React from "react"

// import LatestProjects from "../../components/LatestProjects"
import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"
import styles from "./index.css"
const Homepage = (props) => {
  return (
    <Page { ...props }>
      <div className={styles.cols}>
        <LatestPosts numberOfPosts={ 10 } postType={ 'Project' } title={ 'Realisations' }/>
        <LatestPosts numberOfPosts={ 10 } title={ 'Writing' } showLinkDomain={ true }/>
      </div>
    </Page>
  )
}

export default Homepage
