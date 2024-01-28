import useLSBeforeUnload from '../../signalState/hooks/useLSBeforeUnload';
import One from '../One';
import Two from '../Two';
import Three from '../Three';
import Fourth from '../Fourth';
import s from './Layout.module.scss';

const Layout = () => {
  console.log('start');
  console.log('');

  useLSBeforeUnload();

  return (
    <div className={s.wrapper}>
      <div className={s.layout}>
        <div>{import.meta.env.VITE_PROJECT_TITLE}</div>

        <div>
          <One />
          <Two />
          <Three />
          <Fourth />
        </div>
      </div>
    </div>
  );
};

export default Layout;
