import One from './One';
import Two from './Two';
import Three from './Three';
import s from './Layout.module.scss';

const Layout = () => {
  console.log('start');
  console.log('');

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