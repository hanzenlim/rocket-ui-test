import LaunchService from "../services/LaunchService";

export const ACTIONS = {
  REQUEST_LAUNCHES: "REQUEST_LAUNCHES",
  RECEIVE_LAUNCHES: "RECEIVE_LAUNCHES",
  REQUEST_LAUNCH_INFO: "REQUEST_LAUNCH_INFO",
  RECEIVE_LAUNCH_INFO: "RECEIVE_LAUNCH_INFO"
};

export const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

export const requestLaunchInfo = () => ({
  type: ACTIONS.REQUEST_LAUNCH_INFO
});

const receiveLaunchInfo = response => ({
  type: ACTIONS.RECEIVE_LAUNCH_INFO,
  payload: {
    launchInfo: response
  }
});

export const fetchLaunches = dispatch => {
  dispatch(requestLaunches());
  return LaunchService.get().then(response =>
    dispatch(receiveLaunches(response))
  );
};

export const fetchLaunchInfo = (dispatch, flightNumber) => {
  dispatch(requestLaunchInfo());
  LaunchService.getLaunchInfo(flightNumber).then(response => {
    const { data } = response;
    dispatch(receiveLaunchInfo(data));
  });
};

const shouldFetchLaunches = launchCollection =>
  !launchCollection || !launchCollection.fetching;

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
  shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch);
