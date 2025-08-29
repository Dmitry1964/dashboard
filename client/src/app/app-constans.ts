import { AppRouter } from "./app-routes";
import { NavbarLinksType } from "./app-types";

export enum NavbarLinks {
  Users = 'Пользователи',
  Main = 'Главная'
}

export const userLinks: NavbarLinksType = {
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
