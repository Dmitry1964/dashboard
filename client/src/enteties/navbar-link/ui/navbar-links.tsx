import { NavLink } from 'react-router-dom';
import cls from './navbar-link.module.scss';

type NavbarLinksProps = {
  name: string;
  links?: {title: string, href: string}[],
  imgUrl: string
}

const NavbarLinks = ({ name, links, imgUrl }: NavbarLinksProps) => {
  return (
    <div className={cls.navbar_links}>
      <img className={cls.navbar_links__img} src={imgUrl} alt={`Иконка ${name}`} />
      {links && !links.length && <span className={cls.navbar_links__title}>{name}</span>}
      {
        links && links.length && 
        <ul className={cls.navbar_links__list}>
          <span className={cls.navbar_links__title}>{name}</span>
          {
            links.map((link) => (
              <li className={cls.navbar_links__item} key={link.title}>
                <NavLink to={link.href}>{link.title}</NavLink>
              </li>
            ))
          }
        </ul>
      }
      <button className={cls.navbar_links__btm}></button>
    </div>
  )
}

export default NavbarLinks