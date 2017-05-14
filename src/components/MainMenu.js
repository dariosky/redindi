import React from 'react';

const MainMenu = (props) => (
  <div style={{
    backgroundColor: 'rgba(255,255,255, 0.4)',
    minWidth: '300px',
    minHeight: '300px'
  }}>
    <SketchedButton text="Add"/>
    <SketchedButton text="Settings"/>
    <SketchedButton text="Stats"/>
    {props.children}
  </div>
);

const pathStyle = {
  colorRendering: 'auto',
  fillOpacity: '.98276',
  color: '#000000',
  shapeRendering: 'auto',
  solidColor: '#000', stroke: '#000', strokeWidth: '10.71',
  fill: '#dedada',
  fillRule: 'evenodd',
  mixBlendMode: 'normal', imageRendering: 'auto', isolation: 'auto',
  // animation:'spin 4s linear infinite'
}
const textStyle = {
  fontSize: '80px',
  letterSpacing: '0px',
  textAnchor: 'middle', lineHeight: '125%', wordSpacing: 0, textAlign: 'center',
  fontFamily: 'Purisa', fill: '#000',
};

class SketchedButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('clicked', this.props.text);
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick}>
        <svg width="200" height="200"
             viewBox="0 0 354 354"
        >
          <g transform="translate(0 -698.03) matrix(.79666 0 0 .79666 964.11 421.04)">
            <path
              d="m-1e3 374.13c-92.074 11.283-193.14 62.219-192.56 161.24-10.39 125.52 106.59 255.43 236.74 228.61 120.16-18.082 211.24-157.84 157.65-272.44-33.306-76.394-118.24-128.59-201.82-117.41z"
              style={pathStyle}/>
            <text style={textStyle} transform="scale(1.0846 .92196)">
              <tspan y="650.63263" x="-910.2428">{this.props.text}</tspan>
            </text>
          </g>
        </svg>
      </a>
    )
  }
}

export default MainMenu;

