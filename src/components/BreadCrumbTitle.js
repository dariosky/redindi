import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  breadcrumb: {
    // background: 'darkorange',
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {marginBottom: '20px'},
}

const BreadCrumbTitle = (props) => {
  const {classes} = props
  return <div className={classes.breadcrumb}>
    <h1>Dindi</h1>
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
