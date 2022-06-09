import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <Link
              onClick={() => setShowSidebar(!showSidebar)}
              key={singleLink?.id}
              to={`${singleLink?.route}`}
              className="link"
            >
              <li>
                <div
                  style={{ display: 'inline-block' }}
                  className="link border-none"
                >
                  {singleLink?.page}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export { Sidebar };
