import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const ProjectPreview = ({ __url, title }) => {
  return (
    <div className={ styles.wrapper }>
      <Link to={ __url } className={ styles.title }>
        { title }
      </Link>
    </div>
  )
}

ProjectPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProjectPreview
