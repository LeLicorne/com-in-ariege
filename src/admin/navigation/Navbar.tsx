import { FaUser } from 'react-icons/fa';
import Nav from './Nav';
import Store from './Store';

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Store />
        <Nav />
        <div className="ml-auto flex items-center space-x-4">
          <FaUser />
        </div>
      </div>
    </div>
  );
}
