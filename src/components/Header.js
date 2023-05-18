import React from 'react'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
        <nav className="col-md-5">
          <ul>
            <li>
              <HashLink
                to="/#home"
                className="fs-m fw-300 text-secondary link-info"
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#profile"
                className="fs-m fw-300 text-secondary  link-info"
              >
                Profile
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#skills"
                className="fs-m fw-300 text-secondary  text-primary link-info"
              >
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#works"
                className="fs-m fw-300 text-secondary  text-primary link-info"
              >
                Works
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                className="fs-m fw-300 text-secondary  text-primary link-info"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header