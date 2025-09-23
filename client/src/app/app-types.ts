
export type NavbarLinksType = {
  name: string;
  links?: { title: string; href: string }[];
}

export type User = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  position: string;
  // role: 'user' | 'admin';
}

export interface IPartners {
  inn: string;
  shortName: string;
}