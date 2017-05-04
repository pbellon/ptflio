import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { joinUri } from "phenomic"

// import Loading from "../../components/Loading"
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"

import styles from "./index.css"

const descHTML = `I'm a web developer freelance specialized in data-driven applications and data-visualizations.`;

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    header,
    body,
    sidebar,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }
) => {
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )
  const defaultsSidebar = {
    title: 'Pierre Bellon',
    description: descHTML,
    twitter: '@toutenrab',
    linkedIn: '@@'
  }
  const _sidebar = Object.assign({}, sidebar, defaultsSidebar)
  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const socialImage = head.hero && head.hero.match("://") ? head.hero
    : joinUri(process.env.PHENOMIC_USER_URL, head.hero)

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "twitter:image", content: socialImage },
    { name: "description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      <div className={ styles.wrapper + " " + styles.pageContent }>
        <div className={ styles.row }>
          <div className={styles.sidebar}>
            <Sidebar metadata={ {pkg:pkg} } { ..._sidebar }/>
          </div>
          <div className={styles.body}>
            { head.header &&
              <Header { ...head }/>
            }
            { children }
          </div>
        </div>
        { footer }
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  // body: PropTypes.string,
  sidebar: PropTypes.object,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
