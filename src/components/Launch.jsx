import React from "react";
import PropTypes from "prop-types";

function Launch({ launch }) {
  return (
    <li>
      <h2> {launch.mission_name} </h2>
      <div> Flight Number: {launch.flight_number} </div>
    </li>
  );
}

Launch.propTypes = {
  launch: PropTypes.shape({
    mission_name: PropTypes.string,
    flight_number: PropTypes.number
  }).isRequired
};

export default Launch;
