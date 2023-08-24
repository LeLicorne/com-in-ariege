import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const loc = useLocation();

  const routes = [
    {
      href: `/admin`,
      label: 'Dashboard',
      active: loc.pathname === `/admin`,
    },
    {
      href: `/admin/categories`,
      label: 'Catégories',
      active: loc.pathname === `/admin/categories`,
    },
    {
      href: `/admin/produits`,
      label: 'Produits',
      active: loc.pathname === `/admin/produits`,
    },
    {
      href: `/admin/parametres`,
      label: 'Paramètres',
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
