import { ACTIONS } from "../actions/Launches";

const initialState = {
  launches: [],
  launchInfo: {},
  launchInfoFetching: false,
  fetching: false
};

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches]
  }),
  [ACTIONS.REQUEST_LAUNCH_INFO]: ({ state }) => ({
    ...state,
    launchInfoFetching: true
  }),
  [ACTIONS.RECEIVE_LAUNCH_INFO]: ({ state, action }) => ({
    ...state,
    launchInfoFetching: false,
    launchInfo: { ...state.launchInfo, ...action.payload.launchInfo }
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type]
    ? actionHandlers[action.type]({ state, action })
    : state;
