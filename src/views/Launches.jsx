import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLaunchesIfNeeded, fetchLaunchInfo } from "../actions/Launches";
import Launch from "../components/Launch";
import MasterLayout from "./MasterLayout";

class LaunchesView extends Component {
  constructor() {
    super();
    this.onLaunchInfoClick = this.onLaunchInfoClick.bind(this);
  }

  state = {
    isLaunchInfoOpen: false
  };

  componentDidMount() {
    const { dispatch, launchesCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }

  onLaunchInfoClick(flightNumber) {
    const { launchInfo = {} } = this.props.launchCollection;

    // if the flight number that was clicked is already open, then close the view.
    if (flightNumber === launchInfo.flight_number) {
      this.setState({
        isLaunchInfoOpen: !this.state.isLaunchInfoOpen
      });
      this.toggleLaunchInfo();

      return;
    }

    const { dispatch } = this.props;
    fetchLaunchInfo(dispatch, flightNumber);
    this.setState({
      isLaunchInfoOpen: true
    });
  }

  getContent() {
    const { launchCollection } = this.props;
    const { launchInfo } = launchCollection;
    const { isLaunchInfoOpen } = this.state;

    if (!launchCollection || launchCollection.fetching) {
      return <div> LOADING </div>;
    }

    if (!launchCollection.launches.length) {
      return <div> NO DATA </div>;
    }

    const launches = launchCollection.launches.map(launchSummary => {
      const showLaunchInfo =
        launchSummary.flight_number === launchInfo.flight_number;
      return (
        <Launch
          {...{
            onLaunchClick: this.onLaunchInfoClick,
            isLaunchInfoOpen,
            launchInfo: showLaunchInfo ? launchInfo : {},
            key: launchSummary.launch_id,
            launch: launchSummary
          }}
        />
      );
    });

    return <ul>{launches}</ul>;
  }

  render() {
    return (
      <div>
        <MasterLayout
          pageNamne="launches"
          renderBody={() => (
            <div>
              <h2> SpaceX launches </h2>
              {this.getContent()}
            </div>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchesView);
