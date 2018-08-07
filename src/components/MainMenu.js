import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import {gotoUrl} from '../reducers/dindi'
import {connect} from 'react-redux'

const styles = {
  mainMenu: {
    minWidth: '300px',
    flexGrow: 1,
  },
  link: {
    verticalAlign: 'middle',
    display: 'inline-block',
    '&:hover': {
      transform: 'scale(1.05)',
      '& $path': {fill: '#fff'},
    },
    '&:focus $path': {
      zoom: '1.2',
      outline: 'none',
      stroke: '#a09898',
    },
  },
  btn: {
    cursor: 'pointer', overflow: 'visible',
  },
  text: {
    fontSize: '80px',
    letterSpacing: '0px',
    textAnchor: 'middle', lineHeight: '125%', wordSpacing: 0, textAlign: 'center',
    fontFamily: 'Purisa, sans-serif', fill: '#000',

  },
  path: {
    transition: 'fill .4s ease',
    colorRendering: 'auto',
    fillOpacity: '.98276',
    color: '#000000',
    shapeRendering: 'auto',
    solidColor: '#000', stroke: '#000', strokeWidth: '10.71',
    fill: '#dedada',
    fillRule: 'evenodd',
    mixBlendMode: 'normal', imageRendering: 'auto', isolation: 'auto',
    // animation: 'spin 4s linear infinite',
    transformOrigin: '50% 50%',
  },


}

class MainMenu extends React.Component {
  render() {
    const {classes} = this.props
    return <div className={classes.mainMenu}>
      <SketchedButton text="Add" path="/add"/>
      <SketchedButton text="Settings" path="/settings"/>
      <SketchedButton text="Stats" path="/stats"/>
      {this.props.children}
    </div>
  }
}

class SketchedButton extends React.Component {

  handleClick = () => {
    this.props.gotoUrl(this.props.path)

  }

  render() {
    const {path, text, classes} = this.props
    const ui = <svg width="200" height="200"
                    viewBox="0 0 354 354"
                    className={classNames(classes.btn, 'btn')}
    >
      <g transform="translate(0 -698.03) matrix(.79666 0 0 .79666 964.11 421.04)">
        <path
          d="m-1e3 374.13c-92.074 11.283-193.14 62.219-192.56 161.24-10.39 125.52 106.59 255.43 236.74 228.61 120.16-18.082 211.24-157.84 157.65-272.44-33.306-76.394-118.24-128.59-201.82-117.41z"
          className={classNames(classes.path, 'path')}/>
        <text className={classes.text} transform="scale(1.0846 .92196)">
          <tspan y="650.63263" x="-910.2428">{text}</tspan>
        </text>
      </g>
    </svg>
    // const Component = path ? Link : 'div'
    const Component = 'div'
    return React.createElement(
      Component, {
        className: classes.link, to: path,
        onClick: this.handleClick,
      }, ui,
    )
  }
}

const mapDispatchToProps = {
  gotoUrl,
}

SketchedButton = injectSheet(styles)(
  connect(null, mapDispatchToProps)(SketchedButton),
)


export default injectSheet(styles)(MainMenu)

