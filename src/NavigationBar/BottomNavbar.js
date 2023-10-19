import React from 'react';

const BottomNavbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a href="#" className="btn btn-ghost btn-sm">Logo Icon</a>
        </div>
        <div className="navbar-center">
          <ul className="flex items-center">
            <li><a href="#" className="btn btn-ghost btn-sm">Navlink 1</a></li>
            <li><a href="#" className="btn btn-ghost btn-sm">Navlink 2</a></li>
            <li><a href="#" className="btn btn-ghost btn-sm">Navlink 3</a></li>
            <li><a href="#" className="btn btn-ghost btn-sm">Navlink 4</a></li>
            <li><a href="#" className="btn btn-ghost btn-sm">Navlink 5</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="input-group">
            <input type="text" className="input input-bordered input-sm" placeholder="Search" />
            <button type="button" className="btn btn-sm btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0a7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
};

export default BottomNavbar;