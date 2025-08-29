import { NavbarLinks } from "src/app/app-constans";
import { AppRouter } from "src/app/app-routes";

export const getHeaderTitle = (title : string) => {
  let headerTitle = '';
  switch (title) {
    case AppRouter.User :
      headerTitle = NavbarLinks.Users
      break
    case AppRouter.Main :
      headerTitle = NavbarLinks.Main
      break

  }

  return headerTitle
}