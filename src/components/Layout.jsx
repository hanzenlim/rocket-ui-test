import React from "react";
import PropTypes from "prop-types";

const Layout = ({ pageName, menu, children }) => (
  <main className={`${pageName} layout`}>
    <nav>{menu}</nav>
    <section>{children}</section>
  </main>
);

Layout.propTypes = {
  pageName: PropTypes.string.isRequired
};

export default Layout;
