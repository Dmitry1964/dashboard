import { NavLink } from "react-router-dom";
import cls from "./navbar-links.module.scss";
// import { type MouseEvent } from "react";

type NavbarLinksProps = {
  name: string;
  pageHref: string;
  links?: { title: string; href: string }[];
  icon: React.ReactNode;
};

const NavbarLinks = ({ name, links, icon, pageHref }: NavbarLinksProps) => {

// const handleLink = (evt: MouseEvent<HTMLAnchorElement>) => {
//   evt.preventDefault();
// }

  return (
    <div className={cls.navbar_links}>
      <NavLink to={pageHref} className={({isActive}) => [cls.navbar_links__head, isActive ? cls.active : " "].join(' ')}>
        {icon}
        <h2 className={cls.navbar_links__title}>{name}</h2>
      </NavLink>
      <button className={cls.navbar_links__btn}></button>
      {links?.length ? (
        <ul className={cls.navbar_links__list}>
          {links.map((link) => (
            <li key={link.title}>
              <NavLink to={link.href}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default NavbarLinks;
