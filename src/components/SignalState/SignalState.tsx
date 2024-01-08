import s from './SignalState.module.scss';

const SignalState = () => (
  <div className={s.signalState}>{import.meta.env.VITE_PROJECT_TITLE}</div>
);

export default SignalState;
