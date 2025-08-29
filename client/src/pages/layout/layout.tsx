import cls from './layout.module.scss';
import { Navbar } from 'src/widgest/navbar';
import { Outlet } from 'react-router-dom';
import { Header } from 'src/widgest/header';
import { RootState } from 'src/store/store';
import { useSelector } from 'react-redux';
import { getHeaderTitle } from 'src/shared/service';

const Layout = () => {

  const  path = useSelector((state : RootState) => state.location.pathName);

  const title =  getHeaderTitle(path)

  return (
    <div className={cls.layout}>
      <main className={cls.layout__main}>
        <Navbar />
        <section className={cls.layout__wrapper}>
          <Header title={title} />
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default Layout;