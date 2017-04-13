import React from "react"

import styles from "./index.css"
import metadata from '../../metadata';

const Footer = () => {
  const repository = metadata.pkg.source_repository;
  console.log('repo', repository);
  return (
    <footer className={ styles.footer }>
      { /* If you like Phenomic, this is a way to share the love ;) */ }
      <p>
        <a
          href={ process.env.PHENOMIC_HOMEPAGE }
          className={ styles.phenomicReference }
        >
          { "Website generated with " }
          <span className={ styles.phenomicReferenceName }>
            {  `<${ process.env.PHENOMIC_NAME} />` }
          </span>
        </a>&nbsp;•&nbsp;<span>Code available on <a href={ repository.url } target="_blank" rel="nofollow">{ repository.name }</a></span>
      </p>
    </footer>
)
}

export default Footer
