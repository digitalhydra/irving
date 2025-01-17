export const components = {
  defaults: [],
  providers: {},
  page: {},
};

export const route = {
  status: null,
  redirectTo: false,
  redirectStatus: 0,
  action: '',
};

export const form = {
  submitting: false,
  submitted: false,
  failed: false,
  validation: {},
  redirect: '',
};

export const visible = {
  test: false,
};

export const player = {
  currentTime: 0,
  duration: 0,
  loading: false,
  playing: false,
  seek: 0,
  src: '',
  visible: false,
  volume: 0.5,
};

export const error = null;

export const loading = false;

export const componentData = {};

export const componentDataMeta = {
  loading: false,
  error: false,
  data: [],
};

const defaultState = {
  components,
  componentData,
  error,
  loading,
  player,
  route,
  visible,
};

export default defaultState;
