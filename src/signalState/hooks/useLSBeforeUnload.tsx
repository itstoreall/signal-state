import { useEffect } from 'react';
import * as utils from '../utils';

const useLSBeforeUnload = () => {
  useEffect(() => {
    const lsData = utils.ls.getLSData();
    console.log('lsData -->', lsData);
    if (lsData) utils.ls.removeLSData();
    utils.addBeforeUnload(utils.ls.setLSData);
    return () => {
      utils.removeBeforeUnload(utils.ls.setLSData);
    };
  }, []);
};

export default useLSBeforeUnload;
