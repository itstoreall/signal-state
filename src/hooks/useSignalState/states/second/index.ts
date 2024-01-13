import { setBacicFns } from '../../utils';
import { secondSignal } from '..';

const handleSecondState = () => ({
  ...setBacicFns(secondSignal)
});

export default handleSecondState;
