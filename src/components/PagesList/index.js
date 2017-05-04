import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

import styles from "./index.css"

const PagesList = ({ showLinkDomain, pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <ul className={ styles.list }>
          {
          pages.map((page) => (
            <li className={styles.page} key={ page.title }><PagePreview showLinkDomain={ showLinkDomain } { ...page } /></li>
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
  showLinkDomain: PropTypes.bool,
  pages: PropTypes.array.isRequired,
}

export default PagesList
