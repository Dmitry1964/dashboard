import cls from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <div className={cls.navbar__wrapper}>
        <div className={cls.navbar__logo}>
          <img src="content/svg/logo.svg" width={148} height={28} alt="Логотип дашбоард" />
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar;