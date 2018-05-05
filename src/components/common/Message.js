import React, {Component} from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const styles = {
  message: {
    transition: 'all .5s ease',
    '&.hidden': {
      overflow: 'hidden',
      height: 0,
      border: 0,
      padding: 0,
    },
  },
}

class Message extends Component {
  render() {
    const {message, color, background, classes, visible} = this.props
    const classnames = classNames(classes.message, {'hidden': !visible})
    return <div className={classnames}
                style={{color, background}}>
      {message}
    </div>
  }
}

Message.defaultProps = {
  visible: true,
}
Message.propTypes = {
  visible: PropTypes.bool,
  message: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
}

export default injectSheet(styles)(Message)
