import { useEffect } from 'react';
import ls from '../localStorage';
import * as gu from '../utils/glodal';

const useLSBeforeUnload = () => {
  useEffect(() => {
    const lsData = ls.getLSData();
    console.log('lsData -->', lsData);
    if (lsData) ls.removeLSData();
    gu.addBeforeUnload(ls.setLSData);
    return () => gu.removeBeforeUnload(ls.setLSData);
  }, []);
};

export default useLSBeforeUnload;
