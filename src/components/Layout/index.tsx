import One from '../One';
import Two from '../Two';
import Three from '../Three';
import s from './Layout.module.scss';
import { useEffect } from 'react';

const Layout = () => {
  console.log('start');
  console.log('');

  const stateLSLabel = 'signal_state';

  useEffect(() => {
    const retrievedText = localStorage.getItem(stateLSLabel);

    if (retrievedText) {
      console.log('stateLSLabel ----->', retrievedText);
      localStorage.removeItem(stateLSLabel);
    }

    const setDataBeforeUnload = () => {
      localStorage.setItem(stateLSLabel, 'localStorage data');
    };

    window.addEventListener('beforeunload', setDataBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', setDataBeforeUnload);
    };
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.layout}>
        <div>{import.meta.env.VITE_PROJECT_TITLE}</div>

        <div>
          <One />
          <Two />
          <Three />
        </div>
      </div>
    </div>
  );
};

export default Layout;
