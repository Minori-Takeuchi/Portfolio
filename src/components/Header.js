import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='row'>
        <div class="col-md-3"></div>
        <div class="col-md-3"></div>
        <nav className='col-md-5'>
          <ul>
            <li>
              <Link to="/" class="fs-m fw-300 text-secondary link-info">Home</Link>
            </li>
            <li>
              <Link to="/profile" class="fs-m fw-300 text-secondary  link-info">Profile</Link>
            </li>
            <li>
              <Link to="/sns" class="fs-m fw-300 text-secondary  text-primary link-info">Works</Link>
            </li>
            <li>
              <Link to="/sns" class="fs-m fw-300 text-secondary  text-primary link-info">SNS</Link>
            </li>
            <li>
              <Link to="/sns" class="fs-m fw-300 text-secondary  text-primary link-info">SNS</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header