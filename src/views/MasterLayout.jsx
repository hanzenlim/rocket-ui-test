import React from "react";
import { connect } from "react-redux";
import Navigation from "../components/Navigation";
import Layout from "./Layout";

const menu = Navigation();

function MasterLayoutz({ renderBody, pageName }) {
  const layoutProps = {
    menu,
    pageName
  };

  return <Layout {...layoutProps}>{renderBody()}</Layout>;
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterLayoutz);
