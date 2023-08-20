import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const loc = useLocation();

  const routes = [
    {
      href: `/admin`,
      label: 'Overview',
      active: loc.pathname === `/admin`,
    },
    {
      href: `/admin/categories`,
      label: 'Categories',
      active: loc.pathname === `/admin/categories`,
    },
    {
      href: `/admin/produits`,
      label: 'Products',
      active: loc.pathname === `/admin/produits`,
    },
    {
      href: `/admin/parametres`,
      label: 'Settings',
      active: loc.pathname === `/admin/parametres`,
    },
  ];

  return (
    <nav className="flex items-center mx-6 space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          to={route.href}
          className={`text-sm font-medium transition-colors hover:text-black ${
            route.active ? 'text-black' : 'text-grey'
          }`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
