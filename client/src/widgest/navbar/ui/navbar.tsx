import cls from "./navbar.module.scss";
import { NavbarLinks } from "src/enteties/navbar-link";
import { NavbarLinksType } from "src/app/app-types";
import { AppRouter } from "src/app/app-routes";
import { NavLink } from "react-router-dom";
import { UserIcon } from "src/enteties/user-icon";

const userLinks: NavbarLinksType = {
  name: "Пользователь",
  links: [
    {
      title: "Регистрация",
      href: AppRouter.Register,
    },
    {
      title: "Войти",
      href: AppRouter.Login,
    },
  ],
};

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <div className={cls.navbar__wrapper}>
        <div className={cls.navbar__logo}>
          <NavLink to={AppRouter.Main}>
            <img
              src="content/svg/logo.svg"
              width={148}
              height={28}
              alt="Логотип дашбоард"
            />
          </NavLink>
          <button className={cls.navbar__btn}></button>
        </div>
        <div className={cls.navbar__search}>
          <img
            className={cls.navbar__search_img}
            src="content/svg/icon-search.svg"
            width={16}
            height={16}
            alt="Иконка-поиск"
          />
          <input
            className={cls.navbar__search_field}
            type="text"
            placeholder="Search for..."
          />
        </div>
        <NavbarLinks
          name={userLinks.name}
          links={userLinks.links}
          icon = {<UserIcon/>}
          pageHref={AppRouter.User}
        />
      </div>
    </nav>
  );
};

export default Navbar;
