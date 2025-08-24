import cls from './layout.module.scss';
import { Navbar } from 'src/widgest/navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={cls.layout}>
      <main className={cls.layout__main}>
        <Navbar />
        <section className={cls.layout__wrapper}>
        <div className={cls.layout__header}>
          <p>Analytics</p>
          <button>kdkdk</button>
        </div>
        <Outlet />
        </section>
      </main>
    </div>
  )
}

export default Layout;