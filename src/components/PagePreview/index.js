import React, { PropTypes } from "react"
import { Link } from "phenomic"
import styles from "./index.css"

const PagePreview = ({ __url, title, link, type }) => {
  const isExternal = (type)=>type && type == 'external'
  const domain = (link)=>link && (new URL(link)).host
  const linkDomain = domain(link)
  let linkEl = <Link to={ __url } className={ styles.title }>{ title }</Link>
  if(isExternal(type)){
    linkEl = <a href={__url } rel="nofollow" className={ styles.title }>{ title }</a>
  }

  console.log(type, link, linkDomain);

  return (
    <div className={ styles.wrapper }>
      { linkEl }
      { linkDomain &&
          <span className={ styles.domain }>&nbsp;-&nbsp;({ linkDomain })</span>
      }
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  link: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
