
export type NavbarLinksType = {
  name: string;
  links?: { title: string; href: string }[];
}

export type User = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  position: string;
}