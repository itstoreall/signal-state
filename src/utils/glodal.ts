export const addBeforeUnload = (cb: () => void) =>
  window.addEventListener('beforeunload', cb);

export const removeBeforeUnload = (cb: () => void) =>
  window.removeEventListener('beforeunload', cb);
