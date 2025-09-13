import { AppRouter } from "./app-routes";
import { NavbarLinksType } from "./app-types";

export enum NavbarLinks {
  Users = 'Пользователи',
  Main = 'Главная',
  UserRegister = 'Регистрация нового пользователя'
}

export enum FetchStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum AuthStatus {
  Auth = 'auth',
  NoAuth = 'no_auth',
  Unkhown = 'unkhown',
  Loading = 'loading',
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
