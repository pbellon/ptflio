import React, { PropTypes } from "react"
import { Link } from "phenomic"
import styles from "./index.css"

const PagePreview = ({ __url, title }) => {
  return (
    <div className={ styles.wrapper }>
      <Link to={ __url } className={ styles.title }>
        { title }
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
