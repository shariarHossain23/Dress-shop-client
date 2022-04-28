import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function ActiveLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ borderBottom:match?"3px solid #eb5525" :"none"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  

export default ActiveLink;