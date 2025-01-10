import { HeaderProps, NavItem } from './types';

const defaultNavItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
  { label: 'Área do aluno', href: '/aluno', isButton: true }
];

export const Header = ({ 
  navItems = defaultNavItems,
  logo = 'DuoLibras',
  onNavItemClick 
}: HeaderProps) => {
  const handleClick = (item: NavItem) => {
    if (onNavItemClick) {
      onNavItemClick(item);
    }
  };

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
          {logo}
        </span>
      </div>
      <div className="flex space-x-6 text-white">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item)}
            className={`${
              item.isButton
                ? 'bg-gradient-to-r from-cyan-500 to-cyan-700 px-4 py-2 rounded-full'
                : 'hover:text-cyan-500 transition-colors'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Header;
