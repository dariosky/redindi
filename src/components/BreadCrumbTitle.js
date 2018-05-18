import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import {Link} from 'react-router-dom'

const styles = {
  breadcrumb: {
    background: 'darkorange',
    padding: '2em',
    width: '100%',
    color: 'black',
    textAlign: 'center',
    transition: 'background-color 0.8s ease',
  },
  subtitle: {marginBottom: '20px'},

  title: `
    font-size: 3em;
    text-decoration: none;
    color: black;
  `
  ,
}

const BreadCrumbTitle = (props) => {
  const {classes} = props
  return <div className={classes.breadcrumb}>
    <Link className={classes.title} to="/">Dindi</Link>
    <div className={classes.subtitle}>
      being obsessed with finance flows
    </div>
  </div>
}

BreadCrumbTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default injectSheet(styles)(BreadCrumbTitle)
