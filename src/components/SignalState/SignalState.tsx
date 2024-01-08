/* eslint-disable react-hooks/exhaustive-deps */
import useState from '../../hooks/useState';
import s from './SignalState.module.scss';
import { effect } from '@preact/signals';

const SignalState = () => {
  const { first } = useState();

  effect(() => {
    first.value === 0 && first.counter.run();
    first.value === 5 && first.counter.stop();
  });

  console.log('---->', first.value);

  return (
    <div className={s.signalState}>{import.meta.env.VITE_PROJECT_TITLE}</div>
  );
};

export default SignalState;
