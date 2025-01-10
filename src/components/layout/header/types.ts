export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface HeaderProps {
  navItems?: NavItem[];
  logo?: string;
  onNavItemClick?: (item: NavItem) => void;
}
