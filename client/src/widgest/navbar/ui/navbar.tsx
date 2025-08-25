import cls from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <div className={cls.navbar__wrapper}>
        <div className={cls.navbar__logo}>
          <img src="content/svg/logo.svg" width={148} height={28} alt="Логотип дашбоард" />
          <button className={cls.navbar__btn}></button>
        </div>
        <div className={cls.navbar__search}>
          <img className={cls.navbar__search_img} src="content/svg/icon-search.svg" width={16} height={16} alt="Иконка-поиск" />
          <input className={cls.navbar__search_field} type="text" placeholder='Search for...' />
        </div>
      </div>

    </nav>
  )
}

export default Navbar;