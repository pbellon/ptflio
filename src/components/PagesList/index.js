import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

import styles from "./index.css"

const PagesList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <ul className={ styles.list }>
          {
          pages.map((page) => (
            <li className={styles.page} key={ page.title }><PagePreview { ...page } /></li>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
