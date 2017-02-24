import React, { PropTypes } from "react"

import ProjectPreview from "../ProjectPreview"

import styles from "./index.css"

const ProjectsList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <ul className={ styles.list }>
          {
          pages.map((page) => (
            <li key={ page.title }><ProjectPreview { ...page } /></li>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

ProjectsList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default ProjectsList
