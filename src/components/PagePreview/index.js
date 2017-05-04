import React, { PropTypes } from "react"
import { Link } from "phenomic"
import styles from "./index.css"

const PagePreview = ({ showLinkDomain, __url, title, link, postType }) => {
  const isExternal = (type)=>type && type == 'external'
  console.log('postType', postType);
  const domain = (link)=>link && (new URL(link)).host
  const linkDomain = domain(link)
  let linkEl = <Link to={ __url } className={ styles.title }>{ title }</Link>;
  if(isExternal(postType)){
    linkEl = <a href={ link } rel="nofollow" target="_blank" className={ styles.title }>{ title }</a>;
  }

  return (
    <div className={ styles.wrapper }>
      { linkEl }
      { linkDomain && showLinkDomain &&
          <span className={ styles.domain }>&#8287;({ linkDomain })</span>
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
