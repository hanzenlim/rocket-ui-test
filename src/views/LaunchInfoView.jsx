import React from "react";
import _isEmpty from "lodash/isEmpty";
import PropTypes from "prop-types";

function Launch({ onLaunchClick, launch, launchInfo, isLaunchInfoOpen }) {
  const { flight_number: flightNumber } = launch;
  const { rocket } = launchInfo;
  const rocketId = rocket && rocket.rocket_id;
  return (
    <li>
      <h2
        style={{
          cursor: "pointer"
        }}
        onClick={() => onLaunchClick(flightNumber)}
      >
        {launch.mission_name}
      </h2>
      <div> Flight Number: {launch.flight_number} </div>
      {isLaunchInfoOpen && !_isEmpty(launchInfo) && (
        <div>
          <div>
            <b>Rocket ID: </b>
            <span>{rocketId}</span>
          </div>
          <div>
            <b>Details: </b>
            <span>{launchInfo.details}</span>
          </div>
        </div>
      )}
    </li>
  );
}

Launch.propTypes = {
  launch: PropTypes.shape({
    mission_name: PropTypes.string,
    flight_number: PropTypes.number
  }).isRequired,
  onLaunchClick: PropTypes.func.isRequired,
  isLaunchInfoOpen: PropTypes.bool.isRequired
};

export default Launch;
