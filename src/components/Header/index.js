import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"

const HeaderTitle = ({ link, title }) => {
  if(link){
    return (
      <a rel="nofollow" target="_blank" href={ link } title={ `Visit ${title} website`}>
        { title }
      </a>
    );
  } else {
    return (<span>
      { title }
    </span>);
  }
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string
};

const Header = (props)=>{
  const title = (<HeaderTitle link={ props.link } title={ props.title }/>);
  const pageDate = props.date ? new Date(props.date) : null;
  const headerStyle = {
    backgroundImage: `url("/assets/${props.header}")`
  };
  return (
    <header className={ styles.header }>
      <div className={ styles.header__background }
           style={ headerStyle }>
      </div>
      <div className={ styles.header__content}>
        <h1>{ title }</h1>
      </div>
    </header>
  );
}

export default Header
