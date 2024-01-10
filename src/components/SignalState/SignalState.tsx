/* eslint-disable react-hooks/exhaustive-deps */
import One from '../Layout/One';
import Three from '../Layout/Three';
import Two from '../Layout/Two';
import s from './SignalState.module.scss';

const SignalState = () => {
  console.log('start');
  console.log('');

  return (
    <div className={s.signalState}>
      <div>{import.meta.env.VITE_PROJECT_TITLE}</div>

      <div>
        <One />
        <Two />
        <Three />
      </div>
    </div>
  );
};

export default SignalState;
