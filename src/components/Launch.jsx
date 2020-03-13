import React from "react";
import PropTypes from "prop-types";

function Launch({ onLaunchClick, launch, launchInfo }) {
  const { flight_number: flightNumber } = launch;
  return (
    <li>
      <h2 onClick={() => onLaunchClick(flightNumber)}>{launch.mission_name}</h2>
      <div> Flight Number: {launch.flight_number} </div>
      {launchInfo && <div>{JSON.stringify(launchInfo)}</div>}
    </li>
  );
}

Launch.propTypes = {
  launch: PropTypes.shape({
    mission_name: PropTypes.string,
    flight_number: PropTypes.number
  }).isRequired,
  onLaunchClick: PropTypes.func.isRequired,
  launchInfo: PropTypes.string.isRequired
};

export default Launch;
