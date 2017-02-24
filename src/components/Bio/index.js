import React, { PropTypes } from "react"
// import cx from "classnames"
// import Markdown from "react-remarkable"

const Bio = ({ className, children }) => (
  <div className={ className }>
    { children }
  </div>
)

Bio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Bio.displayName = "Bio"

export default Bio
