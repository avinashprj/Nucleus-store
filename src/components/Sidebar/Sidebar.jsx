import React from 'react';
import { Link } from 'react-router-dom';
import { useCloseOnClickOutside } from '../../CustomHooks/CustomHooks';
import { pageLinks } from '../Navbar/navbar.data';

const Sidebar = ({ showSidebar, setShowSidebar, navRef }) => {
  const sidebarModalRef = React.useRef(null);
  // useCloseOnClickOutside(sidebarModalRef, setShowSidebar);
  return (
    <aside className={`sidebar-modal ${showSidebar ? 'open' : ''}`}>
      <div
        ref={sidebarModalRef}
        className={`sidebar hide ${showSidebar ? 'open' : ''}`}
      >
        <ul className="sidebar-links">
          {pageLinks.map((singleLink) => (
            <li>
              <Link
                onClick={() => setShowSidebar(!showSidebar)}
                key={singleLink?.id}
                to={`${singleLink?.route}`}
                className="link"
              >
                <div
                  style={{ display: 'inline-block' }}
                  className="link border-none"
                >
                  {singleLink?.page}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export { Sidebar };
