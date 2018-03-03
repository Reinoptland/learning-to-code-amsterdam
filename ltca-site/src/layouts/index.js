import React from "react"
import PropTypes from "prop-types"

import "../styles/main.scss"
require("prismjs/themes/prism-okaidia.css");

const Layout = ({ children }) =>
  <div>
    {children()}
  </div>

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
