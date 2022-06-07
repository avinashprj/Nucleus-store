import React from 'react';
import { Link } from 'react-router-dom';
import { useCloseOnClickOutside } from '../../CustomHooks/CustomHooks';
import { pageLinks } from '../Navbar/navbar.data';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const sidebarModalRef = React.useRef(null);
  useCloseOnClickOutside(sidebarModalRef, setShowSidebar);
  return (
    <aside className={`sidebar-modal ${showSidebar ? 'open' : ''}`}>
      <div
        ref={sidebarModalRef}
        className={`sidebar hide ${showSidebar ? 'open' : ''}`}
      >
        <ul className="sidebar-links">
          {pageLinks.map((singleLink) => (
            <li key={singleLink.id}>
              <Link to={`/${singleLink.page}`} className="link">
                {singleLink.page}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export { Sidebar };
