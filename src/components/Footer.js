import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; TWD - Build by: <a href="https://www.youtube.com/channel/UCRf7mazcufqZxd2pR3oQJuQ?sub_confirmation=1" target="_blank">Nabendu Biswas</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
