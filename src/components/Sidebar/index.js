import React, { PropTypes } from "react"
// import cx from "classnames"
// import Markdown from "react-remarkable"
import Svg from "react-svg-inline"
import { Link } from "phenomic"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from './index.css'

const Sidebar = ({ className, title, description, metadata:{pkg} }) => (
  <div className={ styles.sidebar + ' '  + className }>
    <Link to={ '/' }><h1 className={ styles.title }>{ title }</h1></Link>
    <p dangerouslySetInnerHTML={ { __html: description } }></p>
    <ul className={ styles.socials }>
      {
        pkg.twitter &&
        <li><a
          href={ `https://twitter.com/${pkg.twitter}` }
          className={ styles.link }>
          <Svg svg={ twitterSvg } title={ "Twitter" } cleanup />
        </a></li>
      }
      {
        pkg.repository &&
        <li><a
          href={ pkg.repository }
          className={ styles.link }>
          <Svg svg={ gitHubSvg } title={ "GitHub" } cleanup />
        </a></li>
      }
    </ul>
  </div>
)

Sidebar.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  metadata: PropTypes.object.isRequired,
}

Sidebar.displayName = "Sidebar"

export default Sidebar
