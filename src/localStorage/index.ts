const stateLSLabel = 'signal_state';
const data = 'localStorage data';

const _ls = localStorage;
const get = () => _ls.getItem(stateLSLabel);
const set = () => _ls.setItem(stateLSLabel, data);
const del = () => _ls.removeItem(stateLSLabel);

const ls = {
  getLSData: get,
  setLSData: set,
  removeLSData: del
};

export default ls;
